import React from "react";
import classes from "./styles/Alert.module.css";
import css from "classnames";
import { cloneElement } from "react";
import { useState } from "react";

const Alert = ({ children, type, message }) => {
  const [show, setShow] = useState(true);

  const renderAlert = function () {
    return cloneElement(children);
  };

  const closeHandler = (e) => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <div className={css(classes.alert, classes[type], !show && classes.hide)}>
      <span className={classes.closebtn} onClick={closeHandler}>
        x
      </span>
      {children ? renderAlert() : message}
    </div>
  );
};

export default Alert;
