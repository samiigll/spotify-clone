export const initialState = {
  token: null,
};

export const reducerCases = {
  SET_TOKEN: 'SET_TOKEN',
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    default:
      return state;
  }
};

export default reducer;
