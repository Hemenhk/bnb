import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { signupAction } from "../../store/auth/actions/signUpActions";
import { setAuthInputValues } from "../../store/auth/reducers/authSlice";
import classes from "./styles/SigninForm.module.css";
import Alert from "../../ui/Alert";
import { useState } from "react";

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

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
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
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={changeHandler}
            placeholder="Username"
            required
          />
        </div>
        <div className={classes.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={changeHandler}
            placeholder="Email Address"
            required
          />
        </div>
        <div className={classes.formGroup}>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Password"
            required
          />
        </div>
        <div className={classes.formGroup}>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={changeHandler}
            placeholder="Confirm Password"
            required
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
