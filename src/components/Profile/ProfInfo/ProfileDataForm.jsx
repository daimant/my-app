import React from "react";
import {
  createField,
  Input,
  Textarea
} from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import classes from "./ProfInfo.module.css";

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <button>Сохранить</button>
      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <b>Id:</b> {profile.userId}
      </div>
      <div>
        <b>Имя:</b> {profile.fullName}
        {createField(Input, "fullName", "Полное имя", [])}{" "}
      </div>
      <div>
        <b>В поиске работы:</b> {profile.lookingForAJob ? "Да" : "Нет"}
        {createField(Input, "lookingForAJob", "", [], { type: "checkbox" })}
      </div>
      <div>
        <b>Проф.навыки:</b>{" "}
        {profile.lookingForAJobDescription
          ? profile.lookingForAJobDescription
          : "не заполнено"}
        {createField(
          Textarea,
          "lookingForAJobDescription",
          "Мои профессиональные навыки",
          []
        )}
      </div>
      <div>
        <b>Обо мне:</b> {profile.aboutMe ? profile.aboutMe : "не заполнено"}
        {createField(Textarea, "aboutMe", "Обо мне", [])}
      </div>
      <div>
        <b>Контакты:</b>{" "}
        {Object.keys(profile.contacts).map((key, i) => {
          return (
            <div key={i} className={classes.contact}>
              <b>{key}</b>
              {createField(Textarea, "contacts." + key, key, [])}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
