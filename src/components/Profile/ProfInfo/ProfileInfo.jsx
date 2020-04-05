import classes from "./ProfInfo.module.css";
import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import defaultProfilePicture from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = e => {
    if (e.target.files.length) savePhoto(e.target.files[0]);
  };

  const onSubmit = formData => {
    saveProfile(formData).then(() => setEditMode(false));
  };

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          className={classes.avatar}
          src={profile.photos.large || defaultProfilePicture}
          alt={defaultProfilePicture}
        />
        <div>
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>
        <ProfileStatus
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Изменить</button>
        </div>
      )}
      <div>
        <b>Id:</b> {profile.userId}
      </div>
      <div>
        <b>Имя:</b> {profile.fullName}
      </div>
      <div>
        <b>В поиске работы:</b> {profile.lookingForAJob ? "Да" : "Нет"}
      </div>
      <div>
        <b>Проф.навыки:</b>{" "}
        {profile.lookingForAJobDescription
          ? profile.lookingForAJobDescription
          : "не заполнено"}
      </div>
      <div>
        <b>Обо мне:</b> {profile.aboutMe ? profile.aboutMe : "не заполнено"}
      </div>
      <div>
        <b>Контакты:</b>{" "}
        {Object.keys(profile.contacts).map((key, i) => {
          return (
            <Contact
              key={i}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};
const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contact}>
      <b>{contactTitle}:</b> {contactValue ? contactValue : "не заполнено"}
    </div>
  );
};

export default ProfileInfo;
