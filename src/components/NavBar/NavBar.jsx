'use strict';
import React from 'react';
import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
  
  
  let navigationElement = props.state
  .map(d =>
    <div className={classes.item}>
      <NavLink to={d.link} activeClassName={classes.activeLink}>{d.text}</NavLink>
    </div>
  );
  
  return (
    <nav className={classes.nav}>
      {navigationElement}
    </nav>
  )
};

export default NavBar;