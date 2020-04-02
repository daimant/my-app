import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialStore = {
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
  profile: null,
  status: ""
};

const profileReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        img: "https://clck.ru/MDDf7",
        likeCounts: 0
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ""
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};

export const addPostActionCreator = newPostText => ({
  type: ADD_POST,
  newPostText
});
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const setStatus = status => ({ type: SET_STATUS, status });

export const getUserProfile = userId => dispatch => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
};
export const getStatus = userId => dispatch => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = status => dispatch => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
