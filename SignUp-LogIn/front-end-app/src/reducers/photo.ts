import { PhotoState } from "./types/photo";
import { AnyAction } from "redux";
import { SET_PHOTOS } from "../actions/photo";

export const initialState: PhotoState = {
  photos: [],
};

export const photoReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_PHOTOS:
      return { ...state, photos: [...action.payload] };
    default:
      return state;
  }
};
