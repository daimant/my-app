import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          if (p > props.currentPage - 5 && p < props.currentPage + 5) {
            return (
              <span
                className={props.currentPage === p && classes.selectedPage}
                onClick={e => {
                  props.onPageChanged(p);
                }}
              >
                {" "}
                {p}{" "}
              </span>
            );
          }
        })}
      </div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={classes.usersPhoto}
                />
              </NavLink>
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              {/*<div>{u.status}</div>*/}
            </span>
            <span>
              {/*<div>{"u.location.city"}</div>*/}
              {/*<div>{"u.location.country"}</div>*/}
            </span>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Отписаться
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Подписаться
                </button>
              )}
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;