import { combineReducers } from "redux";
import tweetReducer from "./tweetReducer";
import userReducer from "./useReducer";
import loadingReducer from "./loadingReducer";
import authedUserReducer from "./authedUserReducer";

export default combineReducers({
  tweets: tweetReducer,
  users: userReducer,
  loading: loadingReducer,
  authedUser: authedUserReducer,
});
