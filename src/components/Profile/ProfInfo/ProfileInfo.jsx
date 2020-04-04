import classes from "./ProfInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import defaultProfilePicture from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          className={classes.avatar}
          src={
            profile.photos.large !== null
              ? profile.photos.large
              : defaultProfilePicture
          }
          alt={defaultProfilePicture}
        />
        <div>Имя: {profile.fullName}</div>
        <div>ID: {profile.userId}</div>
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
