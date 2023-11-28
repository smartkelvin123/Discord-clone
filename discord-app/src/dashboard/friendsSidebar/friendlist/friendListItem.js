import React from "react";
import { Button, Typography } from "@mui/material";
import Avatar from "../../../shared/component/avatar";

const FriendListItem = ({ id, userName, isOnline }) => {
  return (
    <Button
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        color: "black",
        backgroundColor: "#5865F2",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        textTransform: "none",
        position: "relative",
      }}
    >
      <Avatar userName={userName} />
      <Typography
        style={{
          marginLeft: "7px",
          fontSize: "700",
          color: "#8e9297",
        }}
        variant="subtitle1"
        align="left"
      >
        {userName}
      </Typography>
    </Button>
  );
};

export default FriendListItem;
