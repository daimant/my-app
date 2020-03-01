import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsReducer from "./friends-reducer";
import navigationsReducer from "./navigations-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sidebarReducer,
  friendsData: friendsReducer,
  navigationsData: navigationsReducer
});

let store = createStore(reducers);

export default store;