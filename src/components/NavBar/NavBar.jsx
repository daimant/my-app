import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>
          Профиль
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/friends" activeClassName={classes.activeLink}>
          Друзья
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/users" activeClassName={classes.activeLink}>
          Пользователи
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>
          Сообщения
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/music" activeClassName={classes.activeLink}>
          Музыка
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/news" activeClassName={classes.activeLink}>
          Новости
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/settings" activeClassName={classes.activeLink}>
          Настройки
        </NavLink>
      </div>
    </nav>
  );
};

// const NavBar = props => {
//     let navigationElement = props.state.map(d => (
//         <div className={classes.item}>
//             <NavLink to={d.link} activeClassName={classes.activeLink}>
//                 {d.text}
//             </NavLink>
//         </div>
//     ));
//
//     return <nav className={classes.nav}>{navigationElement}</nav>;
// };

export default NavBar;
