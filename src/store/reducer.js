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
    default:
      return state;
  }
};

export default clubReducer;
