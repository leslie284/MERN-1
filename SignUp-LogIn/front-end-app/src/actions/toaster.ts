export const SET_TOAST_SUCCESS = "@toaster/TOAST_SUCCESS";
export const SET_TOAST_ERROR = "@toaster/TOAST_ERROR";
export const SET_TOAST_CLEAR = "@toast/TOAST_CLEAR";

export type SetToastSuccess = {
  type: string;
  payload: string;
};

export type SetToastError = {
  type: string;
  payload: string;
};

export type SetToastClear = {
  type: string;
};
export const setToastSuccess = (message: string): SetToastSuccess => {
  return {
    type: SET_TOAST_SUCCESS,
    payload: message,
  };
};

export const setToastError = (message: string): SetToastError => {
  return {
    type: SET_TOAST_ERROR,
    payload: message,
  };
};
export const setToastClear = (): SetToastClear => {
  return {
    type: SET_TOAST_CLEAR,
  };
};
