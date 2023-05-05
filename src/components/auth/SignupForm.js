import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupAction } from "../../store/auth/actions/signUpActions";
import { setAuthInputValues } from "../../store/auth/reducers/authSlice";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const authInputValues = useSelector((state) => state.auth.authInputValues);
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
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={changeHandler}
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={changeHandler}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={changeHandler}
            placeholder="Confirm your password"
            required
          />
        </div>
        <div>
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
