import React from "react";
import CustomPrimaryButton from "../../shared/component/customPrimaryButton";
import RedirectInfo from "../../shared/component/redirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "username should contains  between 3 and 12 character, password between 6 and 12 character, and provide a valid email";
};

const getFormValidMessage = () => {
  return "press to register ";
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate("/register");

    console.log("push to register page");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            addtionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=" "
        redirectText="already have an account ?"
        additionalStyles={{ marginTop: "10px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
