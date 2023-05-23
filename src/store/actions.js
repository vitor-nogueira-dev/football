import { SET_API_KEY, SET_COUNTRIES } from '../utils/constantes';

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
