import classes from "./ProfInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

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
          src={
            props.profile.photos.large !== null
              ? props.profile.photos.large
              : userPhoto
          }
          alt=""
        />
        <div>Имя: {props.profile.fullName}</div>
        <div>ID: {props.profile.userId}</div>
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        {/*<img className={classes.avatar} src="https://clck.ru/MDmXR" />*/}
      </div>
    </div>
  );
};

export default ProfileInfo;
