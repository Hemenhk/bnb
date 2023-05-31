import React from "react";
import { useInput } from "../../../store/validation/actions/inputValidationActions";

const PriceInput = ({ changeHandler, price }) => {
  const { priceBlurHandler, priceHasError } = useInput();

  const inputClasses = priceHasError ? "form-control invalid" : "form-control";

  return (
    <div className={inputClasses}>
      <input
        type="number"
        id="price"
        onChange={changeHandler}
        onBlur={priceBlurHandler}
        name="price"
        value={price}
        required
      />
      {priceHasError && <p className="error-text">Price must not be empty!</p>}
    </div>
  );
};

export default PriceInput;
