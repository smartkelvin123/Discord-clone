import React from "react";
import CustomPrimaryButton from "../../shared/component/customPrimaryButton";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};

const AddfriendButton = () => {
  const handleOpenAddFriendDialog = () => {
    console.log("open friend dialog");
  };

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
      />
    </>
  );
};

export default AddfriendButton;
