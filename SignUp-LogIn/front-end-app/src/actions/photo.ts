import { Photo } from "../reducers/types/photo";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import axios from "axios";
export const SET_PHOTOS = "@photos/SET_PHOTOS";

export type SetPhotos = {
  type: string;
  payload: Array<Photo>;
};

export const setPhotos = (photos: Array<Photo>): SetPhotos => {
  return {
    type: SET_PHOTOS,
    payload: photos,
  };
};

export const getAllPhotos = (albumId: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((res) => dispatch(setPhotos(res.data)))
      .catch((err) => console.log(err));
  };
};
