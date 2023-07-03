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

const initialState = {
  API_KEY: '',
  countries: [],
  leagues: [],
  teams: [],
  players: [],
};

const clubReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_API_KEY:
      return {
        ...state,
        API_KEY: action.payload,
      };
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case SET_LEAGUES:
      return {
        ...state,
        leagues: action.payload,
      };
    case SET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case SET_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };
    case SET_TEAM_STATISTICS:
      return {
        ...state,
        teamStatistic: action.payload,
      };
    case SET_ID_LEAGUE:
      return {
        ...state,
        idLeague: action.payload,
      };
    case SET_SEASON:
      return {
        ...state,
        season: action.payload,
      };
    default:
      return state;
  }
};

export default clubReducer;
