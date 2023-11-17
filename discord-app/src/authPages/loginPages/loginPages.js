import React, { useState } from "react";
import AuthBox from "../../shared/component/authBox";
import LoginPageHeader from "./loginPageHeader";
import LoginPageInput from "./loginPageInput";
import LoginPageFooter from "./loginPageFooter";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLogin = () => {
    console.log("login");
  };

  return (
    <div>
      <AuthBox>
        <LoginPageHeader />
        <div style={{ width: "80%", marginTop: "20px" }}>
          <LoginPageInput
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
          <LoginPageFooter
            handleLogin={handleLogin}
            isFormValid={isFormValid}
          />
        </div>
      </AuthBox>
    </div>
  );
};

export default LoginPage;
