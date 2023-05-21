import React from "react";
import { createPortal } from "react-dom";
import classes from "./styles/Backdrop.module.css";

const Backdrop = (props) => {
  return createPortal(
    <div className={classes.backdrop} onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
