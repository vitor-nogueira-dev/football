import { SET_API_KEY, SET_COUNTRIES, SET_ID_LEAGUE, SET_LEAGUES, SET_PLAYERS, SET_TEAMS, SET_TEAM_STATISTICS } from '../utils/constantes';

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
}

export const ACTION_SET_TEAMS = (teams) => {
  return {
    type: SET_TEAMS,
    payload: teams,
  };
}

export const ACTION_SET_PLAYERS = (players) => {
  return {
    type: SET_PLAYERS,
    payload: players,
  };
}

export const ACTION_SET_TEAM_STATISTICS = (statistics) => {
  return {
    type: SET_TEAM_STATISTICS,
    payload: statistics,
  };
}

export const ACTION_SET_ID_LEAGUE = (idLeague) => {
  return {
    type: SET_ID_LEAGUE,
    payload: idLeague,
  };
}