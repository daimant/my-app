'use strict';
import React from "react";
import classes from "./Friends.module.css";

const Friends = (props) => {
  let friendElement = props.state
  .map(f => <div> ID : {f.id} ,Имя: {f.name} ,Возраст {f.age} </div> );
  return (
    <div>
      {friendElement}
    </div>
  )
};

export default Friends;