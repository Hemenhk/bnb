import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { signinAction } from "../../store/auth/actions/signInActions";
import { setAuthInputValues } from "../../store/auth/reducers/authSlice";
import Alert from "../../ui/Alert";
import { useState } from "react";
import EmailInput from "../form/auth/EmailInput";
import PasswordInput from "../form/auth/PasswordInput";

import classes from "./styles/SigninForm.module.css";
import image from "../images/register.png";

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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        signinAction({
          email: email,
          password: password,
        })
      );
      setShowAlert(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setShowAlert(true);
      console.log(error);
    }
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
    <>
      {showAlert ? alert : null}
      <div className={classes.cardContainer}>
          <form className={classes.formContainer} onSubmit={submitHandler}>
            <div className={classes.headingContainer}>
              <h1 className={classes.h1}>Welcome</h1>
              <p className={classes.p}>Sign in using your credentials</p>
            </div>
            <div className={classes.inputContainer}>
              <div>
                <label className={classes.label}>Email</label>
                <EmailInput changeHandler={changeHandler} value={email} />
              </div>
              <div>
                <label className={classes.label}>Password</label>

                <PasswordInput changeHandler={changeHandler} value={password} />
              </div>
            </div>
            <div className={classes.btnContainer}>
              <button
                type="submit"
                className={`${classes.button} ${classes.btn1}`}
              >
                {isLoading ? "Signing In" : "Sign in"}
              </button>
              <button
                className={`${classes.button} ${classes.btn2}`}
                onClick={cancelHandler}
              >
                Cancel
              </button>
              <p className={classes.redirect}>
                Don't have an account?{" "}
                <span>
                  <NavLink className={classes.click} to="/signup">
                    Click here
                  </NavLink>
                </span>{" "}
                to sign up
              </p>
            </div>
          </form>
        </div>
    </>
  );
};

export default SigninForm;
