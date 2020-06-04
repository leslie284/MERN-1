import { AnyAction } from "redux";
import { SET_PHOTOS } from "../actions/photo";
import { AlbumState } from "./types/album";

export const initialState: AlbumState = {
  albums: [],
};

export const albumReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_PHOTOS:
      return { ...state, albums: [...action.payload] };
    default:
      return state;
  }
};
