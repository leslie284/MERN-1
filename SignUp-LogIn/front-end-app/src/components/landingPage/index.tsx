import React from "react";

import {
  Grid,
  createStyles,
  Theme,
  WithStyles,
  withStyles,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Box,
  Input,
} from "@material-ui/core";

import { history } from "../../healper/history";
const styles = createStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(55),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export type Props = WithStyles;

export function LandingPage(props: Props) {
  const { classes } = props;

  let gotoLoginPage = () => {
    history.push("/login");
  };

  let gotoSignupPage = () => {
    history.push("/signup");
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={gotoLoginPage}
            >
              Login
            </Button>
          </Grid>
          <Grid item lg={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={gotoSignupPage}
            >
              Sign UP
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default withStyles(styles)(LandingPage);
