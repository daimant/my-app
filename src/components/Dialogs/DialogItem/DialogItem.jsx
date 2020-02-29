import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path} activeClassName={classes.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
