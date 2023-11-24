import React from "react";
import { styled } from "@mui/material";
import MainPageButton from "./mainPageButton";

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
        <MainPageButton />
      </Maincontainer>
    </div>
  );
};

export default SideBar;
