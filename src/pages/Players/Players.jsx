import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACTION_FETCH_API } from "../../store/actions";
import { Container, ContentInfos } from "./styles";
import CardPlayer from "../../components/Players/Players";
import { Games } from "../../components/Games/Games";
import ChartComponent from "../../components/Chart/ChartComponent";
import Title from "../../components/Title/Title";

export const Players = () => {
  const { id: idTeam } = useParams();
  const dispatch = useDispatch();

  const players = useSelector((state) => state.players);
  const teamStatistic = useSelector((state) => state.teamStatistic);
  const idLeague = useSelector((state) => state.idLeague);
  const season = useSelector((state) => state.season);

  const fetchPlayers = useCallback(async () => {
    dispatch(ACTION_FETCH_API('players', '', '', season, idTeam));
    dispatch(ACTION_FETCH_API('teamStatistic', '', idLeague || '', season, idTeam));
  }, [dispatch, idTeam, idLeague, season]);

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  return (
    <>
      <Title title="Jogadores e infos sobre a temporada" />
      <Container>
        <ContentInfos>
          {teamStatistic?.fixtures && <Games />}
          <ChartComponent />
        </ContentInfos>
        {players?.map((player) => {
          return <CardPlayer key={player.player.id} {...player} />;
        })}
      </Container>
    </>
  )
}