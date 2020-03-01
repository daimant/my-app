import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Андрей" },
        { id: 2, name: "Валера" },
        { id: 3, name: "Люся" },
        { id: 4, name: "Женя" },
        { id: 5, name: "Катя" },
        { id: 6, name: "Володя" }
      ],
      messagesData: [
        { id: 1, message: "Привет" },
        { id: 2, message: "Yo" },
        { id: 2, message: "Как дела" },
        { id: 3, message: "Привет" },
        { id: 3, message: "Что делаешь?" }
      ],
      newMessageBody: ""
    },
    profilePage: {
      postsData: [
        {
          id: 1,
          message: "hello, how u feel?",
          img: "https://clck.ru/MDDf7",
          likeCounts: 0
        },
        {
          id: 2,
          message: "where my money?",
          img: "https://clck.ru/MDDgs",
          likeCounts: 95
        },
        {
          id: 3,
          message: "i need help",
          img: "https://clck.ru/MDDj5",
          likeCounts: 110
        },
        {
          id: 4,
          message: "i want use props",
          img: "https://clck.ru/MDDid",
          likeCounts: 11
        }
      ],
      newPostText: ""
    },
    sideBar: {},
    friendsData: [
      { id: 1, name: "Андрей", age: 29 },
      { id: 2, name: "Валера", age: 30 },
      { id: 3, name: "Люся", age: 79 },
      { id: 4, name: "Саня", age: 29 },
      { id: 5, name: "Катя", age: 24 },
      { id: 6, name: "Володя", age: 59 }
    ],
    navigationsData: [
      { link: "/profile", text: "Профиль" },
      { link: "/friends", text: "Друзья" },
      { link: "/dialogs", text: "Сообщения" },
      { link: "/music", text: "Музыка" },
      { link: "/news", text: "Новости" },
      { link: "/settings", text: `Настройки` }
    ]
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);
    this._state.friendsData = sidebarReducer(this._state.friendsData, action);
    this._state.navigationsData = sidebarReducer(
      this._state.navigationsData,
      action
    );
    this._callSubscriber(this._state);
  }
};

// window.store = store;
export default store;
