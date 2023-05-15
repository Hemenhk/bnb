import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChangeTheme } from "../store/theme/reducers/themeSlice";
import classes from "./styles/ThemeBtn.module.css";
import { BsSun, BsMoonFill } from "react-icons/bs";

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.currentTheme);

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.body.classList.add("dark-content");
        break;
      case "light":
        document.body.classList.remove("dark-content");
        break;
      default:
    }
  }, [theme]);

  const changeThemeHandler = () => {
    dispatch(setChangeTheme(theme === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <div className={classes.btn} onClick={changeThemeHandler}>
        {theme === "light" && <BsSun className={classes.sun} />}
        {theme === "dark" && <BsMoonFill className={classes.moon} />}
      </div>
    </>
  );
};

export default ThemeBtn;
