'use strict';

import classes from "../components/NavBar/NavBar.module.css";

let dialogsData = [
  {id: 1, name: "Андрей"},
  {id: 2, name: "Валера"},
  {id: 3, name: "Люся"},
  {id: 4, name: "Женя"},
  {id: 5, name: "Катя"},
  {id: 6, name: "Володя"},
];
let messagesData = [
  {id: 1, message: "Привет"},
  {id: 2, message: "Yo"},
  {id: 2, message: "Как дела"},
  {id: 3, message: "Привет"},
  {id: 3, message: "Что делаешь?"},
];
let postsData = [
  {id: 1, message: "hello, how u feel?", likeCounts: "0", img: "https://clck.ru/MDDf7"},
  {id: 2, message: "where my money?", img: 'https://clck.ru/MDDgs', likeCounts: "95"},
  {id: 3, message: "i need help", img: "https://clck.ru/MDDj5", likeCounts: "110"},
  {id: 4, message: "i want use props", img: "https://clck.ru/MDDid", likeCounts: "11"},
];
let navigationsData = [
  {link: "/profile", classes: classes.activeLink, text: 'Профиль'},
  {link: "/friends", classes: classes.activeLink, text: 'Друзья'},
  {link: "/dialogs", classes: classes.activeLink, text: 'Сообщения'},
  {link: "/news", classes: classes.activeLink, text: 'Новости'},
  {link: "/music", classes: classes.activeLink, text: 'Музыка'},
  {link: "/settings", classes: classes.activeLink, text: 'Настройки'},
];
let friendsData = [
  {id: 1, name: "Андрей", age: 29},
  {id: 2, name: "Валера", age: 30},
  {id: 3, name: "Люся", age: 79},
  {id: 4, name: "Саня", age: 29},
  {id: 5, name: "Катя", age: 24},
  {id: 6, name: "Володя", age: 59},
];

let state = {
  dialogsPage : {dialogsData, messagesData},
  profilePage: {postsData},
  sideBap: {},
  friendsData,
  navigationsData
};

export default state;