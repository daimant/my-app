const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
  newPostText: "",
  profile: null
};

const profileReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        img: "https://clck.ru/MDDf7",
        likeCounts: 0
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ""
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
