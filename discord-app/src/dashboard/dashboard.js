import React from "react";
import { styled } from "@mui/material";

import SideBar from "./sidebar/sidebar";
import FriendsSideBar from "./friendsSidebar/friendsSidebar";
import Messager from "./messager/messager";
import AppBar from "./appbar/appBar";

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
}));

const Dashboard = () => {
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messager />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
