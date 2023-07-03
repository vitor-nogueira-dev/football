import { Container, Forms, InputLogin, ButtonLogin } from './styles';
import { ACTION_SET_API_KEY, ACTION_FETCH_API } from '../../store/actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Home = () => {
  const [apiKey, setApiKey] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const validHex = /^[0-9A-Fa-f]+$/;
    if (apiKey.length > 32) {
      alert('The ApiKey must be less than 32 characters');
      setApiKey('');
      return;
    }
    if (!validHex.test(apiKey)) {
      alert('The ApiKey must be a hexadecimal value');
      setApiKey('');
      return;
    }

    try {
      dispatch(ACTION_SET_API_KEY(apiKey));
      dispatch(ACTION_FETCH_API('country', '', '', '', ''));
      history.push('/countries');
    } catch (error) {
      console.error(error.message)
      history.push('/');
    }
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setApiKey(value);
  };

  return (
    <Container>
      <img src={logo} />
      <Forms>
        <InputLogin
          type="text"
          placeholder="Enter your ApiKey"
          value={apiKey}
          onChange={handleChange}
        />
        <ButtonLogin type="button" onClick={handleLogin}>Login</ButtonLogin>
      </Forms>
    </Container>
  );
};

export default Home;
