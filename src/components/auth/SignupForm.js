import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { signupAction } from "../../store/auth/actions/signUpActions";
import { setAuthInputValues } from "../../store/auth/reducers/authSlice";
import classes from "./styles/SignupForm.module.css";
import Alert from "../../ui/Alert";
import { useState } from "react";
import EmailInput from "../form/auth/EmailInput";
import PasswordInput from "../form/auth/PasswordInput";
import UsernameInput from "../form/auth/UsernameInput";
import PasswordConfirmInput from "../form/auth/PasswordConfirmInput";

import image from "../images/login.png";

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
    <>
      {showAlert ? alert : null}
      <div className={classes.container}>
        <form className={classes.formContainer} onSubmit={submitHandler}>
          <div className={classes.headingContainer}>
            <h1 className={classes.h1}>Register Account</h1>
            <p className={classes.p}>Sign up to post a listing</p>
          </div>
          <div className={classes.inputContainer}>
            <div>
              <label className={classes.label}>Username</label>
              <UsernameInput changeHandler={changeHandler} value={username} />
            </div>
            <div>
              <label className={classes.label}>Email</label>
              <EmailInput changeHandler={changeHandler} value={email} />
            </div>
            <div>
              <label className={classes.label}>Password</label>
              <PasswordInput changeHandler={changeHandler} value={password} />
            </div>
            <div>
              <label className={classes.label}>Confirm password</label>
              <PasswordConfirmInput
                changeHandler={changeHandler}
                value={passwordConfirm}
              />
            </div>
          </div>
          <div className={classes.btnContainer}>
            <button
              className={`${classes.button} ${classes.btn1}`}
              type="submit"
            >
              {isLoading ? "Creating User" : "Sign up"}
            </button>
            <button
              className={`${classes.button} ${classes.btn2}`}
              onClick={cancelHandler}
            >
              Cancel
            </button>
            <p className={classes.redirect}>
              Already have an account?{" "}
              <span>
                <NavLink className={classes.click} to="/signup">
                  Click here
                </NavLink>
              </span>{" "}
              to sign in
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
