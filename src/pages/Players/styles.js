import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 900px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-width: 400px;
    width: 100%;
  }
`;

const ContentInfos = styled.div`
  width: 800px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 100%;
    padding: 20px;
  }
`;

export { Container, ContentInfos };