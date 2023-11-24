import React from "react";
import { styled } from "@mui/material";

const Maincontainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#202225",
  color: "#fff",
});

const Sidebar = () => {
  return (
    <div>
      <Maincontainer>
        <div></div>
      </Maincontainer>
    </div>
  );
};

export default Sidebar;
