import React from "react";
import { NavLink } from "react-router-dom";
import {FaAirbnb} from "react-icons/fa"
import classes from "./styles/MainNav.module.css";


const MainNav = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/" >
        <FaAirbnb className={classes.logo}/>
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
          <li>
            <NavLink
              to="/create"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Create A Post
            </NavLink>
          </li>
          {/* <li><NavLink></NavLink></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
