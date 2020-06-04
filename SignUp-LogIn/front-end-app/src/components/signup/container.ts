import { ThunkDispatch } from "redux-thunk";

import { connect } from "react-redux";
import { User, AuthenticationState } from "../../reducers/types/user";
import { Action } from "redux";
import { StoreState } from "../../stores/storeType";
import { register } from "../../actions/user";
import { ToastState } from "../../reducers/types/toast";

export interface MapDispatchToProps {
  register: (user: User) => void;
}

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<User, null, Action>
): MapDispatchToProps => {
  return {
    register: (user: User) => dispatch(register(user)),
  };
};

export interface MapStateToProps {
  user: AuthenticationState;
  toast: ToastState;
}

export const mapStateToProps = (state: StoreState): MapStateToProps => {
  return {
    user: state.authentication,
    toast: state.toast,
  };
};
export const container = connect(mapStateToProps, mapDispatchToProps);
export default container;
