import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { signinAction } from "../../store/auth/actions/signInActions";
import { setAuthInputValues } from "../../store/auth/reducers/authSlice";
import classes from "./styles/SigninForm.module.css";
import Alert from "../../ui/Alert";
import { useState } from "react";
import EmailInput from "../form/auth/EmailInput";
import PasswordInput from "../form/auth/PasswordInput";

const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const { isLoading, success } = useSelector((state) => state.auth);
  const authInputValues = useSelector((state) => state.auth.authInputValues);
  const { email, password } = authInputValues;

  const changeHandler = (e) => {
    dispatch(
      setAuthInputValues({ name: e.target.name, value: e.target.value })
    );
  };

  const cancelHandler = () => {
    navigate("/");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      signinAction({
        email: email,
        password: password,
      })
    );
    setShowAlert(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const alert = success ? (
    <Alert type="success">
      <p>Successfully Logged In!</p>
    </Alert>
  ) : (
    <Alert type="error">
      <p>Failed to login</p>
    </Alert>
  );

  return (
    <div className={classes.container}>
      {showAlert ? alert : null}
      <form onSubmit={submitHandler}>
        <div className={classes.header}>
          <h2>Welcome</h2>
          <h4>Log in to your account using email and password</h4>
        </div>
        <div className={classes.formGroup}>
          <EmailInput changeHandler={changeHandler} value={email} />
        </div>
        <div className={classes.formGroup}>
          <PasswordInput changeHandler={changeHandler} value={password} />
        </div>
        <div className={classes.redirect}>
          Don't have an account?{" "}
          <span>
            <NavLink className={classes.click} to="/signup">
              Click here
            </NavLink>
          </span>{" "}
          to sign up
        </div>
        <div className={classes.formGroup}>
          <button type="submit">{isLoading ? "Logging In" : "Login"}</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
