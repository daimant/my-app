import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={classes.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt=""
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
