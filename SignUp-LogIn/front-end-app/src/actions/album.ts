import { Album } from "../reducers/types/album";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import axios from "axios";
export const SET_ALBUM = "@photos/SET_PHOTOS";

export type SetAlbum = {
  type: string;
  payload: Array<Album>;
};

export const setAlbums = (albums: Array<Album>): SetAlbum => {
  return {
    type: SET_ALBUM,
    payload: albums,
  };
};

export const getAllAlbum = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/?_limit=20")
      .then((res) => dispatch(setAlbums(res.data)))
      .catch((err) => console.log(err));
  };
};
