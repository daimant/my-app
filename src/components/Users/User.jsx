import React from "react";
import classes from "./Users.module.css";
import defaultProfilePicture from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, follow, unfollow, id }) => {
  return (
    <div key={id}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={
                user.photos.small !== null
                  ? user.photos.small
                  : defaultProfilePicture
              }
              className={classes.usersPhoto}
              alt=""
            />
          </NavLink>
        </div>
      </span>
      <span>
        <span>
          <div>Имя пользователя: {user.name}</div>
          <div>Id пользователя: {user.id}</div>
        </span>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Отписаться
            </button>
          ) : (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Подписаться
            </button>
          )}
        </div>
      </span>
    </div>
  );
};
export default User;
