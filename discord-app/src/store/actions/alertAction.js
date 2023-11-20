const alertActions = {
  OPEN_ALERT_MESSAGE: "ALERT_SHOW_ALERT_MESSAGE",
  CLOSE_ALERT_MESSAGE: "ALERT_HIDE_ALERT_MESSAGE",
};

export const getActions = (dispath) => {
  return {
    openAlertMessage: (content = dispath(openAlertMessage(content))),
    closeAlertMessage: (content = dispath(closeAlertMessage())),
  };
};

export const openAlertMessage = (content) => {
  return {
    type: alertActions.OPEN_ALERT_MESSAGE,
    payload: content,
  };
};

export const closeAlertMessage = () => {
  return {
    type: alertActions.CLOSE_ALERT_MESSAGE,
  };
};

export default alertActions;
