const alertActions = {
  OPEN_ALERT_MESSAGE: "ALERT_SHOW_ALERT_MESSAGE",
  CLOSE_ALERT_MESSAGE: "ALERT_HIDE_ALERT_MESSAGE",
};

export const getActions = (dispatch) => {
  return {
    openAlertMessage: (content) => dispatch(openAlertMessage(content)),
    closeAlertMessage: () => dispatch(closeAlertMessage()),
  };
};

export const openAlertMessage = (content) => {
  return (dispatch) => {
    dispatch({
      type: alertActions.OPEN_ALERT_MESSAGE,
      payload: content,
    });

    setTimeout(() => {
      dispatch(closeAlertMessage());
    }, 6000);
  };
};

export const closeAlertMessage = () => {
  console.log("Closing alert message");
  return {
    type: alertActions.CLOSE_ALERT_MESSAGE,
  };
};

export default alertActions;
