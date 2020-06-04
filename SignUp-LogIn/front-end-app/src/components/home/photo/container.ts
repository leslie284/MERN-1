import { ThunkDispatch } from "redux-thunk";
import { Photo } from "../../../reducers/types/photo";
import { Action } from "redux";
import { PhotoState } from "../../../reducers/types/photo";
import { StoreState } from "../../../stores/storeType";
import { getAllPhotos } from "../../../actions/photo";
import { connect } from "react-redux";

export interface MapDispatchToProps {
  getAllPhotos: (albumId: string) => void;
}

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<Photo, null, Action>
): MapDispatchToProps => {
  return {
    getAllPhotos: (albumId: string) => dispatch(getAllPhotos(albumId)),
  };
};

export interface MapStateToProps {
  photo: PhotoState;
}

export const mapStateToProps = (state: StoreState): MapStateToProps => {
  return {
    photo: state.photo,
  };
};
export const container = connect(mapStateToProps, mapDispatchToProps);
export default container;
