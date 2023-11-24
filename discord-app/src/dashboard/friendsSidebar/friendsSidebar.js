import React from "react";
import { styled } from "@mui/material";

const Maincontainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#2f3136",
  color: "#fff",
});

const FriendsSidebar = () => {
  return (
    <div>
      <Maincontainer>
        <div></div>
      </Maincontainer>
    </div>
  );
};

export default FriendsSidebar;
