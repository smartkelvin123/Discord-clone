import alertActions from "../actions/alertAction";

const initailState = {
  showAlertMessage: false,
  alertMessageContent: null,
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: true,
        alertMessageContent: action.payload,
      };
    case alertActions.CLOSE_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: false,
        alertMessageContent: null,
      };
    default:
      return state;
  }
};






export default reducer;
