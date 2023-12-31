import React from "react";
import { styled } from "@mui/material";
import AddfriendButton from "./addfriendButton";
import FriendsTitle from "./friendsTitle";
import FriendList from "./friendlist/friendList";
import PendingInvitation from "./pendingInvitation/pendingInvitationsList";

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
        <FriendsTitle title="private messages" />
        <FriendList />
        <FriendsTitle title="invitattion" />
        <FriendsTitle title="Smart building " />
        <PendingInvitation />
      </Maincontainer>
    </div>
  );
};

export default FriendsSideBar;
