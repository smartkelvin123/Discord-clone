import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
});

const AuthBox = (props) => {
  return (
    <div>
      <BoxWrapper>
        <Box
          sx={{
            width: "400px",
            height: "400px",
            backgroundColor: "#36393f",
            borderRadius: "5px",
            padding: "20px",
            boxShadow: "0 2px 10px 0 rgb (0 0 0 /20%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {props.children}
        </Box>
      </BoxWrapper>
    </div>
  );
};

export default AuthBox;
