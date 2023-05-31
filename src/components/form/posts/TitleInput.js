import React from "react";
import { useInput } from "../../../store/validation/actions/inputValidationActions";
import "../styles/validation.css";

const TitleInput = ({ changeHandler, title }) => {
  const { titleHasError, titleBlurHandler } = useInput();

  const inputClasses = titleHasError ? "form-control invalid" : "form-control";

  return (
    <div className={inputClasses}>
      <input
        className="input"
        type="text"
        id="title"
        onChange={changeHandler}
        onBlur={titleBlurHandler}
        name="title"
        required
      />
      {titleHasError && <p className="error-text">Title must not be empty!</p>}
    </div>
  );
};

export default TitleInput;
