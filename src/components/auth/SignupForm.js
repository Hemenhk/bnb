import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { signupAction } from "../../store/auth/actions/signUpActions";
import { setAuthInputValues } from "../../store/auth/reducers/authSlice";
import classes from "./styles/SigninForm.module.css";
import Alert from "../../ui/Alert";
import { useState } from "react";
import EmailInput from "../form/auth/EmailInput";
import PasswordInput from "../form/auth/PasswordInput";
import UsernameInput from "../form/auth/UsernameInput";
import PasswordConfirmInput from "../form/auth/PasswordConfirmInput";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const { isLoading, success, authInputValues } = useSelector(
    (state) => state.auth
  );
  const { username, email, password, passwordConfirm } = authInputValues;

  const changeHandler = (e) => {
    dispatch(
      setAuthInputValues({ name: e.target.name, value: e.target.value })
    );
  };

  const cancelHandler = () => {
    navigate("/");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        signupAction({
          username: username,
          email: email,
          password: password,
          passwordConfirm: passwordConfirm,
        })
      );
      setShowAlert(true);
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (error) {
      setShowAlert(true);
    }
  };

  const alert = success ? (
    <Alert type="success">
      <p>Successfully signed up your account!</p>
    </Alert>
  ) : (
    <Alert type="error">
      <p>Failed to sign up...</p>
    </Alert>
  );

  return (
    <div className={classes.container}>
      {showAlert ? alert : null}
      <form onSubmit={submitHandler}>
        <div className={classes.header}>
          <h2>Sign Up</h2>
          <h4>Create an account to post you listing</h4>
        </div>
        <div className={classes.formGroup}>
          <UsernameInput changeHandler={changeHandler} value={username} />
        </div>
        <div className={classes.formGroup}>
          <EmailInput changeHandler={changeHandler} value={email} />
        </div>
        <div className={classes.formGroup}>
          <PasswordInput changeHandler={changeHandler} value={password} />
        </div>
        <div className={classes.formGroup}>
          <PasswordConfirmInput
            changeHandler={changeHandler}
            value={passwordConfirm}
          />
        </div>
        <div className={classes.redirect}>
          Already have an account?{" "}
          <span>
            <NavLink className={classes.click} to="/signin">
              Click here
            </NavLink>
          </span>{" "}
          to login
        </div>
        <div className={classes.formGroup}>
          <button type="submit">
            {isLoading ? "Creating User" : "Create"}
          </button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
