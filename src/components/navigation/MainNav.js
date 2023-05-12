import React from "react";
import { NavLink } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa";
import classes from "./styles/MainNav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogOut, setLogin } from "../../store/auth/reducers/authSlice";
import { removeAuthToken, removeAuthUser } from "../../store/utils/auth";

const MainNav = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector(state => state.auth.user)

  const signOutHandler = () => {
    try {
      dispatch(setLogOut());
      removeAuthToken();
      removeAuthUser();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <FaAirbnb className={classes.logo} />
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
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
