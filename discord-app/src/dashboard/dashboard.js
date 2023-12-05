import React, { useEffect } from "react";
import { styled } from "@mui/material";
import { connect } from "react-redux";
import SideBar from "./sidebar/sidebar";
import FriendsSideBar from "./friendsSidebar/friendsSidebar";
import Messager from "./messager/messager";
import AppBar from "./appbar/appBar";
import { logout } from "../shared/utilis/auth";
import { getAction } from "../store/actions/authAction";
import { connectWithSocketServer } from "../realTimeCommunication/socketConnection";
// import connectWithSocketServer from "../realTimeCommunication/socketConnection";

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
}));

const Dashboard = ({ setUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, [setUserDetails]);

  return (
    <Wrapper>
      <SideBar />
      <Messager />
      <FriendsSideBar />
      <AppBar />
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getAction(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Dashboard);
