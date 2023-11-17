import React, { useState } from "react";
import AuthBox from "../../shared/component/authBox";
import LoginPageHeader from "./loginPageHeader";
import LoginPageInput from "./loginPageInput";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        </div>
      </AuthBox>
    </div>
  );
};

export default LoginPage;
