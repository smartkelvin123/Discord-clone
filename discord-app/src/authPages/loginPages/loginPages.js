import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/component/authBox";
import LoginPageHeader from "./loginPageHeader";
import LoginPageInput from "./loginPageInput";
import LoginPageFooter from "./loginPageFooter";
import { ValidateLoginForm } from "../../shared/utilis/validator";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(ValidateLoginForm({ email, password }));
  }, [email, password, setIsFormValid]);

  const handleLogin = () => {
    console.log(email);
    console.log(password);
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
