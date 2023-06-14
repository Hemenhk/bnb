import React from "react";
import { useAuthInput } from "../../../store/validation/actions/authValidationActions";
import classes from "../../auth/styles/SigninForm.module.css"

const PasswordConfirmInput = ({ passwordConfirm, changeHandler }) => {
  const { passwordConfirmBlurHandler, passwordConfirmHasError } = useAuthInput();

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
        className={classes.input}

        required
      />
      {passwordConfirmHasError && (
        <p className="error-text">Password Confirm must not be empty!</p>
      )}
    </div>
  );
};

export default PasswordConfirmInput;
