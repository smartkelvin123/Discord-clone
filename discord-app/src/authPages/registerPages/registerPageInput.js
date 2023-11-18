import React from "react";
import InputWithLabel from "../../shared/component/inputWithLabel";

const RegisterPageInput = (props) => {
  const { email, setEmail, username, setUsername, password, setPassword } =
    props;

  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="enter email address"
        label="Email"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        type="text"
        placeholder="enter a username"
        label="Username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="enter password"
        label="Password"
      />
    </>
  );
};

export default RegisterPageInput;
