import { styled } from "styled-components";

const TextTitle = styled.h1`
  font-size: ${({ fontSize }) => fontSize || '1.3rem'};
  font-weight: 700;
  color: #e2e2e2;
  text-align: center;
  padding: ${({ padding }) => padding || '30px'};
`;

export default TextTitle;