import React, { Component } from "react";
import {
  Grid,
  Paper,
  Theme,
  withStyles,
  createStyles,
  WithStyles,
  Button,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import container, { MapStateToProps, MapDispatchToProps } from "./container";
import { RouteProps } from "react-router-dom";
import AlbumList from "./albums";
import NavBar from "./navbar";
const styles = createStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    margin: "0px 0px 30px 0px",
  },
}));

export type Props = WithStyles & MapStateToProps & MapDispatchToProps;

export class HomePage extends Component<Props> {
  render() {
    return (
      <div>
        <NavBar />
        <AlbumList />
      </div>
    );
  }
}

export default container(withStyles(styles)(HomePage));
