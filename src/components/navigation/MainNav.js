import React from "react";
import { NavLink } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa";
import classes from "./styles/MainNav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogOut } from "../../store/auth/reducers/authSlice.js";
import { removeAuthToken } from "../../store/utils/auth.js";
import ThemeBtn from "../../ui/ThemeBtn";

const MainNav = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);

  const signOutHandler = () => {
    try {
      dispatch(setLogOut());
      removeAuthToken();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.icon}>
        <FaAirbnb className={classes.logo} />
        <p className={classes.logoText}>BnB</p>
      </NavLink>
      <nav>
        <ul className={classes.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li>

          {isAuth && (
            <>
              <li>
                <NavLink
                  to="/create"
                  className={({ isActive }) => (isActive ? classes.active : "")}
                >
                  Create A Post
                </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={signOutHandler}>
                  Sign Out
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/profile/${user?._id}`}
                  className={({ isActive }) => (isActive ? classes.active : "")}
                >
                  {user?.username}
                </NavLink>
              </li>
            </>
          )}
          {!isAuth && (
            <>
              <li>
                <NavLink
                  to="/signin"
                  className={({ isActive }) => (isActive ? classes.active : "")}
                >
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) => (isActive ? classes.active : "")}
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
          <ThemeBtn />
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
