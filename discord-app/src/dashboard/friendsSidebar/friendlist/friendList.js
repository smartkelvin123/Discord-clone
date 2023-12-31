import React from "react";
import { styled } from "@mui/material";
import FriendListItem from "./friendListItem";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendList = ({ friends }) => {
  return (
    <MainContainer>
      {friends &&
        friends.map((f) => (
          <FriendListItem
            username={f.username}
            id={f.id}
            key={f.id}
            isOnline={f.isOnline}
          />
        ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(FriendList);
