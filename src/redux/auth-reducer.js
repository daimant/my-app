import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "social-network/auth/SET_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "social-network/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, isAuth }
});
export const getCaptchaURLSuccess = captchaURL => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaURL }
});
export const getAuthUserData = () => async dispatch => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};
export const login = (
  email,
  password,
  rememberMe,
  captcha
) => async dispatch => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaURL());
    }
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Email или пароль неправильный";
    dispatch(stopSubmit("login", { _error: message }));
  }
};
export const logout = () => async dispatch => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export const getCaptchaURL = () => async dispatch => {
  const response = await securityAPI.getCaptchaURL();
  const captchaURL = response.data.url;

  dispatch(getCaptchaURLSuccess(captchaURL));
};

export default authReducer;
