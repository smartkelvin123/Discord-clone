import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { Connect } from "react-redux";
import { getAction } from "../../store/actions/authAction";

const Notification = (props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open
      onClose={props.onClose}
      autoHideDuration={6000}
    >
      <Alert severity="info">alert message</Alert>
    </Snackbar>
  );
};

export default Notification;
