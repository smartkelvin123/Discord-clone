import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/component/authBox";
import { Typography } from "@mui/material";
import RegisterPageInput from "./registerPageInput";
import RegisterPageFooter from "./registerPageFooter";
import { ValidateRegisterForm } from "../../shared/utilis/validator";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    console.log(email);
    console.log(password);
    console.log(username);
    console.log("register");
  };

  useEffect(() => {
    setIsFormValid(ValidateRegisterForm({ email, password, username }));
  }, [email, password, username, setIsFormValid]);

  return (
    <div>
      <AuthBox>
        <Typography variant="h5" sx={{ color: "white" }}>
          create an account
        </Typography>
        <RegisterPageInput
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          username={username}
          setUsername={setUsername}
        />
        <RegisterPageFooter
          handleRegister={handleRegister}
          isFormValid={isFormValid}
        />
      </AuthBox>
    </div>
  );
};

export default RegisterPage;
