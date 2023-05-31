import React from "react";
import { useInput } from "../../../store/validation/actions/inputValidationActions";
import "../styles/validation.css";

const DateInput = ({ changeHandler, createdAt }) => {
  const { dateHasError, dateBlurHandler } = useInput();

  const inputClasses = dateHasError ? "form-control invalid" : "form-control";
  return (
    <div className={inputClasses}>
      <input
        type="date"
        id="createdAt"
        onChange={changeHandler}
        onBlur={dateBlurHandler}
        name="createdAt"
        value={createdAt}
        required
      />
      {dateHasError && <p className="error-text">Created Date must not be empty!</p>}
    </div>
  );
};

export default DateInput;
