import React from "react";
import { styled } from "@mui/material";

const AvatarPreview = styled("div")({
  width: "42px",
  height: "42px",
  borderRadius: "42px",
  backgroundColor: "#5865f2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "20px",
  fontWeight: "700",
  marginLeft: "5px",
});

const Avatar = ({ userName, large }) => {
  return (
    <AvatarPreview style={large ? { width: "82px", height: "82px" } : {}}>
      <AvatarPreview style={large ? { width: "82px", height: "82px" } : {}}>
        {userName ? userName.substring(0, 2) : ""}
      </AvatarPreview>
    </AvatarPreview>
  );
};

export default Avatar;
