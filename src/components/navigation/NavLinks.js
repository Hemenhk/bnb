import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { BiHomeAlt, BiTab } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";

import classes from "./styles/SideMenu.module.css";
import ThemeBtn from "../../ui/ThemeBtn";

const NavLinks = ({ signOutHandler }) => {
  const { isAuth, user } = useSelector((state) => state.auth);

  return (
    <ul className={classes.navLinks}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <BiHomeAlt size={36} />
        </NavLink>
      </li>
      {isAuth && (
        <>
          <li>
            <NavLink
              to="/create"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <BsPlusSquare size={30} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={signOutHandler}>
              <FiLogOut size={36} />
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
              <FiLogIn size={36} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <FiUserPlus size={36} />
            </NavLink>
          </li>
        </>
      )}
      <ThemeBtn />
    </ul>
  );
};

export default NavLinks;
