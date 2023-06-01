import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../components/navigation/MainNav.js";
import SideMenu from "../components/navigation/SideMenu.js";

import classes from "./styles/Root.module.css";
import BottomMenu from "../components/navigation/BottomMenu.js";

const Root = () => {
  return (
    <div className={classes.container}>
      <MainNav />
      <div className={classes.sidenav}>
        <SideMenu />
      </div>
      <main className={classes.content}>
        <Outlet />
      </main>
      <div className={classes.bottomMenu}>
        <BottomMenu />
      </div>
    </div>
  );
};

export default Root;
