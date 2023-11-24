import React from "react";
import { styled } from "@mui/material";
import AddfriendButton from "./addfriendButton";

const Maincontainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSideBar = () => {
  return (
    <div>
      <Maincontainer>
        <AddfriendButton />
      </Maincontainer>
    </div>
  );
};

export default FriendsSideBar;
