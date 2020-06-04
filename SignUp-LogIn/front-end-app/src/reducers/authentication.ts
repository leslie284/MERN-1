import { AnyAction } from "redux";
import { AuthenticationState } from "./types/user";
import {
  SET_USER_LOGIN_REQUEST,
  SET_USER_LOGOUT,
  SET_USER_LOGIN_SUCCESS,
  SET_USER_LOGIN_FAILURE,
} from "../actions/user";

export const initialState: AuthenticationState = {
  user: {
    email: "",
    password: "",
  },
  loggedIn: false,
  logginIn: false,
};

export const authenticationReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_USER_LOGIN_REQUEST:
      return { ...state, logginIn: true, user: { ...action.payload } };

    case SET_USER_LOGIN_SUCCESS: {
      return { ...state, loggedIn: true, user: { ...action.payload } };
    }

    case SET_USER_LOGIN_FAILURE: {
      return initialState;
    }

    case SET_USER_LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};
