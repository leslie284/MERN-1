import { combineReducers } from "redux";

import { photoReducer as photo } from "./photo";
import { registrationReducer as registration } from "./registration";
import { authenticationReducer as authentication } from "./authentication";
import { albumReducer as album } from "./album";
import { toastReducer as toast } from "./toaster";

const rootReducer = combineReducers({
  photo,
  album,
  registration,
  authentication,
  toast,
});

export default rootReducer;
