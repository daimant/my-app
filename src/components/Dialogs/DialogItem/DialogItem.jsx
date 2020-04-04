import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const DialogItem = ({ name, id }) => {
  let path = "/dialogs/" + id;
  return (
    <div className={classes.dialog} key={id}>
      <NavLink to={path} activeClassName={classes.activeLink}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
