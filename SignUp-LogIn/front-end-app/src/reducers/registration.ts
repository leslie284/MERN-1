import { AnyAction } from "redux";
import { AuthenticationState, RegistrationState } from "./types/user";
import {
  SET_USER_REGISETER_REQUEST,
  SET_USER_REGISETER_SUCCESS,
  SET_USER_REGISETER_FAILURE,
} from "../actions/user";

export const initialState: RegistrationState = {
  registering: false,
};

export const registrationReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_USER_REGISETER_REQUEST:
      return { ...state, registering: true };

    case SET_USER_REGISETER_SUCCESS: {
      return initialState;
    }
    case SET_USER_REGISETER_FAILURE: {
      return initialState;
    }
    default:
      return state;
  }
};
