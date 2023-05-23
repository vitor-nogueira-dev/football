import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 20px;
  max-width: 800px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 20px;
    max-width: 500px;

    > a {
      display: flex;
      justify-content: center;
    }
  }
`;

export default Container;