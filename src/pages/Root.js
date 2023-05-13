import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../components/navigation/MainNav";

const Root = () => {
  return (
    <div>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
