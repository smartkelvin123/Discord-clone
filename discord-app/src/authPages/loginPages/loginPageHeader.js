import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <div>
      <Typography
        variant="h5"
        sx={{
          color: "white",
        }}
      >
        welcome back
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "white",
        }}
      >
        we are happ you are with us
      </Typography>
    </div>
  );
};

export default LoginPageHeader;
