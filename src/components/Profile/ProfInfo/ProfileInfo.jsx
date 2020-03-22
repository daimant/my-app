import classes from "./ProfInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/*<div>*/}
      {/*  <img className={classes.backgroundImg} src='https://clck.ru/MDmXg'/>*/}
      {/*</div>*/}
      <div className={classes.descriptionBlock}>
        <img
          className={classes.avatar}
          src={props.profile.photos.large}
          alt=""
        />
        {/*<img className={classes.avatar} src="https://clck.ru/MDmXR" />*/}
        descr
      </div>
    </div>
  );
};

export default ProfileInfo;
