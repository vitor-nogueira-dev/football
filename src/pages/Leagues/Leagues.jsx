import { useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAPI } from "../../store/actions";
import Container from "./styles";

export const Leagues = () => {
  const dispatch = useDispatch()
  const leagues = useSelector((state) => state.leagues);

  const { country } = useParams();

  const fetchLeagues = useCallback(async () => {
    dispatch(fetchAPI('leaguesOfCountry', country, '', '', ''));
  }, [country, dispatch]);

  useEffect(() => {
    fetchLeagues();
  }, [fetchLeagues]);

  return (
    <>
      {/* <Title title="Selecione a liga/copa para visualizar os times" /> */}
      <Container>
        {leagues?.map((league) => {
          return <CardLeagues
            key={league.league.id}
            {...league} />
        })}
      </Container>
    </>
  )
}