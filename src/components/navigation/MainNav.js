import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavLinks from "./NavLinks.js";
import SideNav from "./SideNav";
import Backdrop from "../../ui/Backdrop";
import { setLogOut } from "../../store/auth/reducers/authSlice.js";
import { removeAuthToken } from "../../store/utils/auth.js";
import { FaAirbnb } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import classes from "./styles/MainNav.module.css";

const MainNav = () => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openSideNavHandler = () => {
    setSideNavIsOpen(true);
  };

  const closeSideNavHandler = () => {
    setSideNavIsOpen(false);
  };

  const signOutHandler = () => {
    try {
      dispatch(setLogOut());
      removeAuthToken();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {sideNavIsOpen && <Backdrop onClick={closeSideNavHandler} />}
      <SideNav show={sideNavIsOpen} onClick={closeSideNavHandler}>
        <nav className={classes.sideNav}>
          <RxCross2
            onClick={closeSideNavHandler}
            className={classes.crossBtn}
          />
          <NavLinks signOutHandler={signOutHandler} />
        </nav>
      </SideNav>
      <header className={classes.header}>
        <NavLink to="/" className={classes.icon}>
          <FaAirbnb className={classes.logo} />
          <p className={classes.logoText}>BnB</p>
        </NavLink>
        <nav className={classes.mainNav}>
          <NavLinks signOutHandler={signOutHandler} />
        </nav>
        <RxHamburgerMenu
          onClick={openSideNavHandler}
          className={classes.menuBtn}
        />
      </header>
    </>
  );
};

export default MainNav;
