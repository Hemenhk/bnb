import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import classes from "./styles/MainNav.module.css";
import ThemeBtn from "../../ui/ThemeBtn";

const NavLinks = ({ signOutHandler }) => {
  const { isAuth, user } = useSelector((state) => state.auth);

  return (
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
      <ThemeBtn/>
    </ul>
  );
};

export default NavLinks;
