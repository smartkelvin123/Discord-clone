import React from "react";
import CustomPrimaryButton from "../../shared/component/customPrimaryButton";
import RedirectInfo from "../../shared/component/redirectInfo";
import { useNavigate } from "react-router-dom";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/register");

    console.log("push to register page");
  };

  return (
    <>
      <div>
        <CustomPrimaryButton
          label="Login"
          addtionalStyles={{ marginTop: "30px" }}
          disabled={!isFormValid}
          onClick={handleLogin}
        />
      </div>
      <RedirectInfo
        text="Don't have an account? "
        redirectText="create an accout"
        additionalStyles={{ marginTop: "20px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
