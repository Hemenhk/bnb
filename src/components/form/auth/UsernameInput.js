import React from "react";
import { useAuthInput } from "../../../store/validation/actions/authValidationActions";
import classes from "../../auth/styles/SigninForm.module.css"

const UsernameInput = ({ username, changeHandler }) => {
  const { usernameBlurHandler, usernameHasError } = useAuthInput();
  const inputClasses = usernameHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div className={inputClasses}>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={changeHandler}
        onBlur={usernameBlurHandler}
        className={classes.input}

        required
      />
      {usernameHasError && (
        <p className="error-text">Title must not be empty!</p>
      )}
    </div>
  );
};

export default UsernameInput;
