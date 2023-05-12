import React from "react";
import { useInput } from "../../../store/validation/actions/inputValidationActions";

const UsernameInput = ({ username, changeHandler }) => {
  const { usernameBlurHandler, usernameHasError } = useInput();
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
        placeholder="Username"
        required
      />
      {usernameHasError && (
        <p className="error-text">Title must not be empty!</p>
      )}
    </div>
  );
};

export default UsernameInput;
