import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinAction } from "../../store/auth/actions/signInActions";
import { setAuthInputValues, setLogin } from "../../store/auth/reducers/authSlice";

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
      navigate("/")
      dispatch(setLogin())
    }, 2000);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
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
          <button type="submit">{isLoading ? "Signing In" : "Signin"}</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
