import React from "react";
import { Typography } from "@mui/material";

const FriendsTitle = () => {
  return (
    <Typography
      variant="h5"
      sx={{
        color: "white",
        textTransform: "uppercase",
        fontSize: " 14px",
        marginTop: "10px",
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
