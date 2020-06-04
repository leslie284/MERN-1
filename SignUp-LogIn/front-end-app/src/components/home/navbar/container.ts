import { connect } from "react-redux";
import { StoreState } from "../../../stores/storeType";
import { AuthenticationState, User } from "../../../reducers/types/user";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { logout } from "../../../actions/user";

export interface MapDispatchToProps {
  logout: () => void;
}

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<User, null, Action>
): MapDispatchToProps => {
  return {
    logout: () => dispatch(logout()),
  };
};

export interface MapStateToProps {
  user: AuthenticationState;
}

export const mapStateToProps = (state: StoreState): MapStateToProps => {
  return {
    user: state.authentication,
  };
};
export const container = connect(mapStateToProps, mapDispatchToProps);
export default container;
