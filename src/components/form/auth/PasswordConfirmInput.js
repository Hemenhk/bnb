import React from "react";
import { useInput } from "../../../store/validation/actions/inputValidationActions";

const PasswordConfirmInput = ({ passwordConfirm, changeHandler }) => {
  const { passwordConfirmBlurHandler, passwordConfirmHasError } = useInput();

  const inputClasses = passwordConfirmHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div className={inputClasses}>
      <input
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        value={passwordConfirm}
        onChange={changeHandler}
        onBlur={passwordConfirmBlurHandler}
        placeholder="Confirm Password"
        required
      />
      {passwordConfirmHasError && (
        <p className="error-text">Password Confirm must not be empty!</p>
      )}
    </div>
  );
};

export default PasswordConfirmInput;
