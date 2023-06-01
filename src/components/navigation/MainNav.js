import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavLinks from "./NavLinks.js";
import SideNav from "./SideNav";
import Backdrop from "../../ui/Backdrop";
import { setLogOut } from "../../store/auth/reducers/authSlice.js";
import { removeAuthToken } from "../../store/utils/auth.js";
import { FaAirbnb } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import classes from "./styles/MainNav.module.css";

const MainNav = () => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

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

  const authenticatedButtons = (
    <>
      <li>
        <NavLink to="/signin" className={classes.btnLink1}>
          Sign in
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" className={classes.btnLink2}>
          Sign up
        </NavLink>
      </li>
    </>
  );
  const unauthButtons = (
    <>
      <li>
        <NavLink to="/" className={classes.btnLink1} onClick={signOutHandler}>
          Sign out
        </NavLink>
      </li>
    </>
  );
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
        <div>
          <ul className={classes.btnDiv}>
            {isAuth ? unauthButtons : authenticatedButtons }
          </ul>
        </div>
      </header>
    </>
  );
};

export default MainNav;
