import { ThunkDispatch } from "redux-thunk";

import { connect } from "react-redux";
import { User, AuthenticationState } from "../../reducers/types/user";
import { Action } from "redux";
import { StoreState } from "../../stores/storeType";
import { login, logout } from "../../actions/user";
import { ToastState } from "../../reducers/types/toast";

export interface MapDispatchToProps {
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<User, null, Action>
): MapDispatchToProps => {
  return {
    login: (username: string, password: string) =>
      dispatch(login(username, password)),
    logout: () => dispatch(logout()),
  };
};

export interface MapStateToProps {
  toast: ToastState;
}

export const mapStateToProps = (state: StoreState): MapStateToProps => {
  return {
    toast: state.toast,
  };
};
export const container = connect(mapStateToProps, mapDispatchToProps);
export default container;
