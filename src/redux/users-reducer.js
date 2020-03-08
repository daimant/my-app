const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialStore = {
  users: [
    {
      id: 1,
      photos: { small: "https://clck.ru/MP3W7", large: null },
      followed: false,
      fullName: "Поморцев Сергей Владимирович",
      status: 'I"m will be a programmer',
      location: { city: "Москва", country: "Россия" }
    },
    {
      id: 2,
      photos: { small: "https://clck.ru/MP3Wg", large: null },
      followed: true,
      fullName: "Петров Петр Петрович",
      status: "I will be a programmer too",
      location: { city: "Екатеринбург", country: "Россия" }
    },
    {
      id: 3,
      photos: { small: "https://clck.ru/MP3X4", large: null },
      followed: true,
      fullName: "Иванов Иван Иванович",
      status: "I will be a programmer too",
      location: { city: "Екатеринбург", country: "Россия" }
    }
  ]
};

const usersReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case "SET_USERS":
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });

export default usersReducer;
