import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { signinAction } from "../../store/auth/actions/signInActions";
import {
  setAuthInputValues,
  setLogin,
} from "../../store/auth/reducers/authSlice";
import classes from "./styles/SigninForm.module.css";

const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth.isLoading);
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

    setTimeout(() => {
      navigate("/");
      dispatch(setLogin());
    }, 2000);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler}>
        <div className={classes.header}>
          <h2>Welcome</h2>
          <h4>Log in to your account using email and password</h4>
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
