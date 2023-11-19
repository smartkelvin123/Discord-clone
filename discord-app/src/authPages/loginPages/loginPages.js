import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/component/authBox";
import LoginPageHeader from "./loginPageHeader";
import LoginPageInput from "./loginPageInput";
import LoginPageFooter from "./loginPageFooter";
import { ValidateLoginForm } from "../../shared/utilis/validator";
import { connect } from "react-redux";
import { getAction } from "../../store/actions/authAction";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ login }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(ValidateLoginForm({ email, password }));
  }, [email, password, setIsFormValid]);

  const handleLogin = () => {
    const userDetails = {
      email,
      password,
    };

    login({ userDetails, navigate });
    console.log(email);
    console.log(password);
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

const mapDispatchToProps = (dispatch) => {
  return {
    ...getAction(dispatch),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
