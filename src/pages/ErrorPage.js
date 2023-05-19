import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import MainNav from "../components/navigation/MainNav";

import classes from "./styles/ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error ocurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.status.message;
  } else if (error.status === 404) {
    title = "404, Page Not found!";
    message = "Could not find resource of page.";
  }
  return (
    <>
      <MainNav />
      <div className={classes.container}>
        <h2>{title}</h2>
        <p>
          {message}{" "}
          Click{" "}
          <span >
            <NavLink to="/" className={classes.link}>here</NavLink>
          </span>{" "}
          to return to the homepage
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
