import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #222222;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  padding: 0;
  box-shadow: rgba(213, 213, 213, 0.24) 0px 3px 8px;

  border-radius: 20px;

  margin: auto;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 90%; 
  }

  &:hover {
    box-shadow: #FFBF00 1px 1px 15px;
  }
`

export default Container;