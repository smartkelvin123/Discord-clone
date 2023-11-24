import React from "react";
import { styled } from "@mui/material";

const Maincontainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393f",

  marginTop: "48px",
  display: "flex",
});

const Messager = () => {
  return (
    <div>
      <Maincontainer>
        <div></div>
      </Maincontainer>
    </div>
  );
};

export default Messager;
