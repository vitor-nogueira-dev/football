import { SET_API_KEY, SET_COUNTRIES, SET_LEAGUES, SET_TEAMS } from '../utils/constantes';

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
