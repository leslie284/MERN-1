import { User } from "../reducers/types/user";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { HttpMethod, fetchApiData } from "../services/apiFetchServices";
import { history } from "../healper/history";
import { setToastError, setToastClear, setToastSuccess } from "./toaster";

export const SET_USER_LOGIN_SUCCESS = "@login/SET_USER_LOGIN_SUCCESS";
export const SET_USER_LOGOUT = "@logout/SET_USER_LOGOUT";
export const SET_USER_LOGIN_REQUEST = "@login/SET_USER_LOGIN_REQUEST";
export const SET_USER_LOGIN_FAILURE = "@login/SET_USER_LOGIN_FAILURE";

export const SET_USER_REGISETER_REQUEST =
  "@register/SET_USER_REGISETER_REQUEST";

export const SET_USER_REGISETER_SUCCESS =
  "@register/SET_USER_REGISETER_SUCCESS";

export const SET_USER_REGISETER_FAILURE =
  "@register/SET_USER_REGISETER_FAILURE";

export type SetUserLoginSuccess = {
  type: string;
  payload: User;
};

export type SetUserLogout = {
  type: string;
  payload: User;
};

export type SetUserRegister = {
  type: string;
  payload: User;
};

export const setUserLoginSuccess = (user: User): SetUserLoginSuccess => {
  return {
    type: SET_USER_LOGIN_SUCCESS,
    payload: user,
  };
};

export const setUserLoginRequest = () => {
  return {
    type: SET_USER_LOGIN_REQUEST,
  };
};

export const setUserLogoutFailure = () => {
  return {
    type: SET_USER_LOGIN_FAILURE,
  };
};
export const setUserRegisterRequest = () => {
  return {
    type: SET_USER_REGISETER_REQUEST,
  };
};

export const setUserRegisterSuccess = () => {
  return {
    type: SET_USER_REGISETER_SUCCESS,
  };
};

export const setUserRegisterFailure = (user: User) => {
  return {
    type: SET_USER_REGISETER_FAILURE,
    payload: user,
  };
};

export const setUserLogout = () => {
  return {
    type: SET_USER_LOGOUT,
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setUserRegisterRequest());
    let user: User = { email, password };
    const params = {
      data: user,
      url: `login`,
      method: "post" as HttpMethod,
    };
    const details = await fetchApiData(params);
    const { token, isSuccess, message } = details;
    if (token && isSuccess) {
      dispatch(setUserLoginSuccess(user));
      localStorage.setItem("token", "Bearer " + token);
      localStorage.setItem("user", token);
      dispatch(setToastClear());
      history.push("/home");
    } else {
      dispatch(setUserLogoutFailure());
      dispatch(setToastError(message));
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setUserLogout());
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    history.push("/login");
  };
};
export const register = (userDetail: User) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const paramsObj = {
      data: userDetail,
      url: `register`,
      method: "post" as HttpMethod,
    };
    dispatch(setUserRegisterRequest());
    const response = await fetchApiData(paramsObj);
    const { isSuccess, message } = response;
    if (isSuccess) {
      dispatch(setUserRegisterSuccess());
      dispatch(setToastSuccess(message));
      history.push("/login");
    } else {
      dispatch(setToastError(message));
    }
  };
};
