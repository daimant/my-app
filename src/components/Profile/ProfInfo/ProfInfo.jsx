'use strict';

import classes from "./ProfInfo.module.css";
import React from "react";

const ProfInfo = (props) => {
  return (
    <div>
      <div>
        <img className={classes.backgroundImg} src='https://clck.ru/MDmXg'/>
      </div>
      <div className={classes.descriptionBlock}>
        <img className={classes.avatar} src="https://clck.ru/MDmXR" />
        descr
      </div>
    </div>
  
  )
};

export default ProfInfo;