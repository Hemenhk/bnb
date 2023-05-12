import React from "react";
import { useAuthInput } from "../../../store/validation/actions/authValidationActions";

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
