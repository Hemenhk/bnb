import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import classes from "./styles/SideNav.module.css"

const SideNav = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-right"
      mountOnEnter
      unmountOnExit
    >
      <aside className={classes.sideNav} onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return createPortal(content, document.getElementById('drawer-hook'))
};

export default SideNav;
