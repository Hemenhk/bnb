import React from "react";
import classes from "./styles/SideMenu.module.css";

import NavLinks from "./NavLinks";
import { useDispatch } from "react-redux";
import { setLogOut } from "../../store/auth/reducers/authSlice";
import { removeAuthToken } from "../../store/utils/auth";

const SideMenu = () => {
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

export default SideMenu;
