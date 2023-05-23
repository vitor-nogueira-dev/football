import { styled } from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 10px;
  table-layout: fixed;

  @media (max-width: 768px) {
    width: 100%;
    border-collapse: collapse;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-bottom: 10px;
    table-layout: fixed;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    color: #ddd;
    background-color: rgba(0, 0, 0, 0.24);
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #222222;
  font-weight: bold;
  text-align: center;
  color: #ffbf00;
  border-bottom: 1px solid #ccc;
  border-radius: 20px;
`;

const TableCell = styled.td`
  padding: 5px;
  text-align: center;

`;

const LogoCell = styled.td`
  padding: 5px;
  text-align: center;
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
`;

const Button = styled.button`
  background: #222222;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  box-shadow: rgba(213, 213, 213, 0.24) 0px 3px 8px;
  border-radius: 20px;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 90%;
  }

  &:hover {
    box-shadow: #ffbf00 1px 1px 15px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 900px;
  padding: ${(props) => (props.padding || '20px')};
`

export { Table, TableRow, TableHeader, TableCell, LogoCell, LogoImage, Button, Container };
