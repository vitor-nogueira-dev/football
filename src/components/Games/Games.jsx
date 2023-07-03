import { useSelector } from "react-redux"
import { Table } from "react-bootstrap";
import { Container, ContentLineUps, TableData, TextLineUps, TableHeader } from "./styles";

export const Games = () => {
  const teamStatistic = useSelector((state) => state.teamStatistic);

  if (!teamStatistic) {
    return null;
  }

  const { fixtures, lineups } = teamStatistic;

  return (
    <Container>
      <ContentLineUps>
        {lineups?.length !== 0 && (() => {
          const acc = lineups.reduce((acc, data) => {
            return acc.played > data.played ? acc : data;
          });

          return (
            <div>
              <p>Formação mais utilizada na temporada: <TextLineUps>{acc.formation}</TextLineUps></p>
              <p>Usada em <TextLineUps>{acc.played}</TextLineUps>{acc.played > 1 ? " jogos" : " jogo"}</p>
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