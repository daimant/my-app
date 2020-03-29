import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "409dbc5d-12bf-4998-9ed9-d1150968a119" }
});

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow: (userId = 1) => {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  unfollow: (userId = 1) => {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  },
  getProfile: userId => {
    return instance.get(`profile/` + userId);
  }
};

export const authAPI = {
  me: () => {
    return instance.get(`auth/me`);
  }
};
