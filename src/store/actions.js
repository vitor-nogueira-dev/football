import { SET_API_KEY } from "../utils/constantes";

export const ACTION_SET_API_KEY = (API_KEY) => {
  return {
    type: SET_API_KEY,
    payload: API_KEY,
  };
};