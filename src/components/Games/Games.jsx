import { useSelector } from "react-redux"
import { Table } from "react-bootstrap";
import { Container, ContentLineUps, TableData, TextLineUps, TableHeader } from "./styles";
// import Title from "../Title/Title";

export const Games = () => {
  const teamStatistic = useSelector((state) => state.teamStatistic);

  if (!teamStatistic) {
    return null;
  }

  const { fixtures, lineups } = teamStatistic;

  return (
    <Container>
      {/* <Title title="Jogos" fontSize="1.5rem" padding="10px" /> */}
      <ContentLineUps>
        {/* <TextLineUps>Formação mais utilizada na temporada</TextLineUps> */}
        {lineups?.length !== 0 && (() => {
          const acc = lineups.reduce((acc, data) => {
            return acc.played > data.played ? acc : data;
          });

          return (
            <div>
              <p>Formação mais utilizada na temporada: <TextLineUps>{acc.formation}</TextLineUps></p>
              <p>Usada em <TextLineUps>{acc.played}</TextLineUps> jogos</p>
            </div>
          );
        })()}
      </ContentLineUps>
      <Table>
        <thead>
          <tr>
            <TableHeader>Games</TableHeader>
            <TableHeader>Wins</TableHeader>
            <TableHeader>Draws</TableHeader>
            <TableHeader>Loses</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>{fixtures.played.total || 0}</TableData>
            <TableData>{fixtures.wins.total || 0}</TableData>
            <TableData>{fixtures.draws.total || 0}</TableData>
            <TableData>{fixtures.loses.total || 0}</TableData>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}