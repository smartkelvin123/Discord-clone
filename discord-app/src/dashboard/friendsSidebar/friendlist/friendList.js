import React from "react";
import { styled } from "@mui/material";
import FriendListItem from "./friendListItem";

const DUMMY_FRIEND = [
  {
    id: "1",
    userName: "John",
    isOnline: true,
  },
  {
    id: "2",
    userName: "Jane",
    isOnline: false,
  },
  {
    id: "3",
    userName: "Jack",
    isOnline: false,
  },
];

const MainContainer = styled("div")({
  width: "100%",
  flexGrow: 1,
});

const FriendList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIEND.map((friend) => (
        <FriendListItem
          key={friend.id}
          UserName={friend.userName}
          isOnline={friend.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendList;
