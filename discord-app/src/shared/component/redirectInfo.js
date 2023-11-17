import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const RedirectTextStyled = styled("span")({
  color: "#00AAFF",
  cursor: "pointer",
  fontWeight: 500,
});

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      sx={{
        color: "#76727d",
      }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle1"
    >
      {text}
      <RedirectTextStyled onClick={redirectHandler}>
        {redirectText}
      </RedirectTextStyled>
    </Typography>
  );
};

export default RedirectInfo;
