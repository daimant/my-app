'use strict';
import React from 'react';
import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>Профиль</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>Сообщения</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.activeLink}>Новости</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.activeLink}>Музыка</NavLink>
      </div>
      <br/>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.activeLink}>Настройки</NavLink>
      </div>
    </nav>
  )
};

export default NavBar;