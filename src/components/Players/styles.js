import { styled } from 'styled-components';

const CardContainer = styled.div`
  width: 150px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #54525285;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
  border: 0.5px solid #8b8b8b;
  text-align: center;
`;

const NamePlayer = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #ffbf00;
`;

const AgePlayer = styled.p`
  font-size: 14px;
  color: #b9b9b9;
`;

const Nationality = styled.p`
  font-size: 14px;
  color: #b9b9b9;
`;

const Img = styled.img`
  max-width: 70px;
  border-radius: 50px;
`;

export { CardContainer, NamePlayer, AgePlayer, Nationality, Img };
