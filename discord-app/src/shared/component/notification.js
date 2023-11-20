import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { connect } from "react-redux";
import { getAction } from "../../store/actions/authAction";

const Notification = ({
  showAlertMessage,
  closeAlertMessage,
  alertMessageContent,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={closeAlertMessage}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    showAlertMessage: state.alert.showAlertMessage,
    alertMessageContent: state.alert.alertMessageContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...getAction(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapDispatchToProps)(Notification);
