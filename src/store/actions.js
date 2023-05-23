import {
  SET_API_KEY,
  SET_COUNTRIES,
  SET_ID_LEAGUE,
  SET_LEAGUES,
  SET_PLAYERS,
  SET_SEASON,
  SET_TEAMS,
  SET_TEAM_STATISTICS,
} from '../utils/constantes';

export const ACTION_SET_API_KEY = (API_KEY) => {
  return {
    type: SET_API_KEY,
    payload: API_KEY,
  };
};

export const ACTION_SET_COUNTRIES = (countries) => {
  return {
    type: SET_COUNTRIES,
    payload: countries,
  };
};

export const ACTION_SET_LEAGUES = (leagues) => {
  return {
    type: SET_LEAGUES,
    payload: leagues,
  };
};

export const ACTION_SET_TEAMS = (teams) => {
  return {
    type: SET_TEAMS,
    payload: teams,
  };
};

export const ACTION_SET_PLAYERS = (players) => {
  return {
    type: SET_PLAYERS,
    payload: players,
  };
};

export const ACTION_SET_TEAM_STATISTICS = (statistics) => {
  return {
    type: SET_TEAM_STATISTICS,
    payload: statistics,
  };
};

export const ACTION_SET_ID_LEAGUE = (idLeague) => {
  return {
    type: SET_ID_LEAGUE,
    payload: idLeague,
  };
};

export const ACTION_SET_SEASON = (season) => {
  return {
    type: SET_SEASON,
    payload: season,
  };
};

export const ACTION_FETCH_API = (endpoint, country, idLeague, season, idTeam) => {
  return async (dispatch, getState) => {
    try {
      const API_KEY = getState().API_KEY;

      const BASE_URL = 'https://v3.football.api-sports.io';
      const endpoints = {
        country: '/countries',
        leaguesOfCountry: `/leagues?country=${country}`,
        teamsOfLeagueAndSeason: `/teams?league=${idLeague}&season=${season}`,
        players: `/players?team=${idTeam}&season=${season}`,
        teamStatistic: `/teams/statistics?season=${season}&team=${idTeam}&league=${idLeague}`,
      };

      const actions = {
        country: SET_COUNTRIES,
        leaguesOfCountry: SET_LEAGUES,
        teamsOfLeagueAndSeason: SET_TEAMS,
        players: SET_PLAYERS,
        teamStatistic: SET_TEAM_STATISTICS,
      };

      const response = await fetch(`${BASE_URL}${endpoints[endpoint]}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': API_KEY,
        },
      });

      const data = await response.json();
      dispatch(actions[endpoint](data.response));
    } catch (error) {
      console.error(error);
    }
  };
};
