import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;

  gap: 20px;

  max-width: 900px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export default Container;
