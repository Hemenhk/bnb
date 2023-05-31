import React from "react";
import classes from "../../posts/styles/CreatePostForm.module.css";
import { useInput } from "../../../store/validation/actions/inputValidationActions";

const DescInput = ({ changeHandler, description }) => {
  const { descHasError, descBlurHandler } = useInput();

  const inputClasses = descHasError ? "form-control invalid" : "form-control";

  return (
    <div className={inputClasses}>
      <textarea
        rows={4}
        cols={50}
        id="description"
        onChange={changeHandler}
        onBlur={descBlurHandler}
        className={classes.desc}
        name="description"
        value={description}
        required
      />
      {descHasError && (
        <p className="error-text">Description must not be empty!</p>
      )}
    </div>
  );
};

export default DescInput;
