import React from "react";
import InputWithLabel from "../../shared/component/inputWithLabel";

const LoginPageInput = ({ email, setEmail, password, setPassword }) => {
  return (
    <div>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="enter email address"
        label="Email"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="enter password"
        label="Password"
      />
    </div>
  );
};

export default LoginPageInput;
