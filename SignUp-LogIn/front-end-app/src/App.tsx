import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import store from "./stores";
import { Provider } from "react-redux";
import HomePage from "./components/home";
import { Grid } from "@material-ui/core";
import { Router, Route } from "react-router-dom";
import { history } from "./healper/history";
import Signup from "./components/signup";
import Login from "./components/login";
import PhotoList from "./components/home/photo";
import landingPage from "./components/landingPage";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a6d4fa",
    },
    secondary: {
      main: "#4caf50",
    },
    error: {
      main: "#d32f2f",
    },
  },
  spacing: 4,
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Grid container spacing={2} style={{ background: "#fff" }}>
          <Router history={history}>
            <Route exact path="/" component={landingPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/album/:id/photos" component={PhotoList} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Router>
        </Grid>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
