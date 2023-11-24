import React from "react";
import { styled } from "@mui/material";

const Maincontainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});

const SideBar = () => {
  return (
    <div>
      <Maincontainer>
        <div></div>
      </Maincontainer>
    </div>
  );
};

export default SideBar;
