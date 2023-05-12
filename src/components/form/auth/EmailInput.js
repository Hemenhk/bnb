import React from "react";
import { useAuthInput } from "../../../store/validation/actions/authValidationActions";

const EmailInput = ({ email, changeHandler }) => {
  const { emailBlurHandler, emailHasError } = useAuthInput();
  const inputClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <div className={inputClasses}>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={changeHandler}
        onBlur={emailBlurHandler}
        placeholder="Email Address"
        required
      />
      {emailHasError && <p className="error-text">Must be a valid email!</p>}
    </div>
  );
};

export default EmailInput;
