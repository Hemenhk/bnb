import React from "react";
import { useInput } from "../../../store/validation/actions/inputValidationActions";

const LocationInput = ({ changeHandler, location }) => {
  const { locationBlurHandler, locationHasError } = useInput();
  
  const inputClasses = locationHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div className={inputClasses}>
      <label htmlFor="location">Add Location:</label>
      <input
        type="text"
        id="location"
        onChange={changeHandler}
        onBlur={locationBlurHandler}
        name="location"
        value={location}
        required
      />
      {locationHasError && (
        <p className="error-text">Location must not be empty!</p>
      )}
    </div>
  );
};

export default LocationInput;
