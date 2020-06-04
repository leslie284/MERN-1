import { ThunkDispatch } from "redux-thunk";
import { Album, AlbumState } from "../../../reducers/types/album";
import { Action } from "redux";
import { StoreState } from "../../../stores/storeType";
import { getAllAlbum } from "../../../actions/album";
import { connect } from "react-redux";

export interface MapDispatchToProps {
  getAllAlbum: () => void;
}

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<Album, null, Action>
): MapDispatchToProps => {
  return {
    getAllAlbum: () => dispatch(getAllAlbum()),
  };
};

export interface MapStateToProps {
  album: AlbumState;
}

export const mapStateToProps = (state: StoreState): MapStateToProps => {
  return {
    album: state.album,
  };
};
export const container = connect(mapStateToProps, mapDispatchToProps);
export default container;
