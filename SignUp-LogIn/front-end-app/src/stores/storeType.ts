import { PhotoState } from "../reducers/types/photo";
import { AuthenticationState } from "../reducers/types/user";
import { AlbumState } from "../reducers/types/album";
import { ToastState } from "../reducers/types/toast";

export type StoreState = {
  photo: PhotoState;
  album: AlbumState;
  authentication: AuthenticationState;
  toast: ToastState;
};
