import React from "react";
import { useAuthInput } from "../../../store/validation/actions/authValidationActions";
const PasswordInput = ({ password, changeHandler }) => {
  const { passwordHasError, passwordBlurHandler } = useAuthInput();
  const inputClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div className={inputClasses}>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={changeHandler}
        onBlur={passwordBlurHandler}
        placeholder="Password"
        required
      />
      {passwordHasError && (
        <p className="error-text">Password must not be empty!</p>
      )}
    </div>
  );
};

export default PasswordInput;
