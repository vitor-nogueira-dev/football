import { useHistory, useParams } from "react-router-dom";
import { ACTION_SET_ID_LEAGUE, ACTION_SET_TEAMS } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { CardTeams } from "../../components/Teams/CardTeams";

import Title from "../../components/Title/Title";

export const Teams = () => {
  const { country, id: idLeague } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  const teams = useSelector((state) => state.teams);
  const season = useSelector((state) => state.season);

  const fetchTeams = useCallback(() => {
    dispatch(ACTION_SET_TEAMS('teamsOfLeagueAndSeason', '', idLeague, season, ''));
  }, [dispatch, idLeague, season]);

  useEffect(() => {
    fetchTeams();
    dispatch(ACTION_SET_ID_LEAGUE(idLeague))

    if (teams?.length === 0) {
      alert('Não há times cadastrados para essa copa/liga na temporada escolhida. Por favor, escolha outra.')
      history.goBack();
    }
  }, [country, dispatch, fetchTeams, history, idLeague, teams?.length]);

  return (
    <>
      <Title title="Selecione um time para visualizar a lista de jogadores e infos sobre a temporada" />
      <Container>
        {teams?.map((team) => {
          return <CardTeams key={team.team.id} {...team} />;
        })}
      </Container>
    </>

  );
};
