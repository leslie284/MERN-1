import { AnyAction } from "redux";

import {
  SET_TOAST_ERROR,
  SET_TOAST_SUCCESS,
  SET_TOAST_CLEAR,
} from "../actions/toaster";
import { ToastState } from "./types/toast";

export const initialState: ToastState = {
  type: "",
  message: "",
};

export const toastReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case SET_TOAST_ERROR:
      return { ...state, type: "error", message: action.payload };
    case SET_TOAST_SUCCESS:
      return { type: "success", message: action.payload };
    case SET_TOAST_CLEAR: {
      return {};
    }
    default:
      return state;
  }
};
