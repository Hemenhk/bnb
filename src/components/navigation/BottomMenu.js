import React from "react";
import NavLinks from "./NavLinks";
import { removeAuthToken } from "../../store/utils/auth";
import { setLogOut } from "../../store/auth/reducers/authSlice";
import { useDispatch } from "react-redux";

import classes from "./styles/BottomMenu.module.css"

const BottomMenu = () => {
  const dispatch = useDispatch();
  const signOutHandler = () => {
    try {
      dispatch(setLogOut());
      removeAuthToken();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.container}>
      <NavLinks signOutHandler={signOutHandler} />
    </div>
  );
};

export default BottomMenu;
