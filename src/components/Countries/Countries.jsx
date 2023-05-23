import { Link } from 'react-router-dom';

import world from '../../assets/world.png';
import { Container } from 'react-bootstrap';
import { ImgCountry, NameCountry } from './styles';


export const CardCountry = (data) => {

  return (
    <Link to={`/leagues/${data.name}`}>
      <Container>
        <ImgCountry src={data.name === 'World' ? world : data.flag} alt={data.name} />
        <NameCountry>{data.name}</NameCountry>
      </Container>
    </Link>
  );
}
