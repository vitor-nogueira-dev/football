import { styled } from 'styled-components';

const Container = styled.div`
  width: 395px;
  height: 549px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
    50% 2900.76% at 50% 53.89%,
    rgba(34, 34, 34, 0.95) 0%,
    #000000 100%
  );
  box-shadow: 0px 4px 4px rgba(192, 183, 232, 0.01);
  border-radius: 10px;
  border: 0.5px solid #ffbf00;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    width: 310px;
    height: 420px;
  }
  > img {
    width: 250px;
  }
`;

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const InputLogin = styled.input`
  width: 280px;
  height: 48px;
  border: 0.5px solid #dddddd;
  border-radius: 10px;
  background-color: #222222;
  color: #dddddd;
  font-size: 15px;
  outline: none;
  padding: 0 20px;
  font-weight: 400;

  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }

  &:focus-within {
    border: 1px solid #ffbf00;
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 48px; 
  }
`;

const ButtonLogin = styled.button`
  width: 180px;
  height: 40px;
  background: linear-gradient(90deg, #ffbf00 0%, #ffdb58 100%);
  border-radius: 40px;
  border: none;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, #ffdb58 0%, #ffbf00 100%);
    transition: all 0.6s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 35px; 
  }
`;

const IconUser = styled.div`
  background-image: url('../../assets/user.png');
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center;
`;

export { Container, Forms, InputLogin, ButtonLogin, IconUser };
