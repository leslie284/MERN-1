import React, { Component } from "react";
import {
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
import { history } from "../../../healper/history";

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
    marginLeft: 50,
  },
  appbar: {
    margin: "0px 0px 30px 0px",
  },
}));

export type Props = WithStyles & MapStateToProps & MapDispatchToProps;

export class NavBar extends Component<Props> {
  componentDidMount() {
    if (!this.props.user.loggedIn) {
      history.push("/login");
    }
  }

  logout = () => {
    this.props.logout();
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
            <Button color="inherit" onClick={this.logout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default container(withStyles(styles)(NavBar));
