import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  padding: 10px;
  border-radius: 20px;
  width: 230px;
  box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
    box-shadow: #ffbf00 1px 1px 15px;
  }

  @media (max-width: 600px) {
    width: 160px;
  }
`;

const ImgCountry = styled.img`
  max-width: 180px;
  src: url(${(props) => props.src});

  @media (max-width: 600px) {
    width: 120px;
  }
`;

const NameCountry = styled.h1`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export { Container, ImgCountry, NameCountry };
