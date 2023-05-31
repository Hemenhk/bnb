import React from "react";
import { useInput } from "../../../store/validation/actions/inputValidationActions";

const ImageCoverInput = ({ changeHandler, imageCover }) => {
  const { imageCoverHasError, imageBlurHandler } = useInput();
  const inputClasses = imageCoverHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div className={inputClasses}>
      <input
        type="text"
        id="imageCover"
        onChange={changeHandler}
        onBlur={imageBlurHandler}
        name="imageCover"
        value={imageCover}
        required
      />
      {imageCoverHasError && (
        <p className="error-text">Image Cover must not be empty!</p>
      )}
    </div>
  );
};

export default ImageCoverInput;
