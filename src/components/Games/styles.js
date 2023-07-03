import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 180px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
`;

const TableHeader = styled.th`
  background-color: #454444;
  padding: 8px;
  text-align: center;
  color: #FFBF00;
  border: 1px solid #ccc;
`;

const TableData = styled.td`
  padding: 8px;
  text-align: center;
  color: #ddd;
  font-weight: 700;
  border: 1px solid #ccc;

  &:nth-child(n+2) {
    border-left: 1px solid #ccc;
  }
`;

const ContentLineUps = styled.div`
  width: 80%;
  color: #ccc;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
`;

const TextLineUps = styled.span`
  font-weight: 700;
  color: #FFBF00;
`;

export {
  TextLineUps,
  ContentLineUps,
  Container,
  Table,
  TableHeader,
  TableData,
};