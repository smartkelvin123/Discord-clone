const initialState = {
  userDetails: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "DUMMY":
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
