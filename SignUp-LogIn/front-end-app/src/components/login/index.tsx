import React, { Component } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useForm } from "react-hook-form";

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
import container, { MapDispatchToProps, MapStateToProps } from "./container";
import CustomizedSnackbars from "../common/Toaster";
import {} from "react-redux";
const styles = createStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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

export type Props = WithStyles & MapDispatchToProps & MapStateToProps;
export type LoginFormData = {
  email: string;
  password: string;
};
export function Login(props: Props) {
  const { classes, toast } = props;

  console.log("=======", props);
  const { register, handleSubmit, errors } = useForm<LoginFormData>();
  const onSubmit = handleSubmit(({ email, password }) => {
    props.login(email, password);
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      {toast.message && (
        <CustomizedSnackbars
          message={toast.message}
          type={toast.type === "error" ? "error" : "success"}
        />
      )}

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p>Please enter email</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p>{errors.email.message}</p>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={register({ required: true, minLength: 3 })}
          />
          {errors.password && errors.password.type === "required" && (
            <p>Please enter your password</p>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default container(withStyles(styles)(Login));
