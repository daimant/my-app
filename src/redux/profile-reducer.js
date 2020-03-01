const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

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
  newPostText: ""
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
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export default profileReducer;
