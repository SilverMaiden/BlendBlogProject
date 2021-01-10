import { combineReducers } from "redux";
import { userReducer } from "./userReducer.ts";
import { blogpostReducer } from "./blogpostReducer.ts";

// rootReducer will eventually be a combination of reducers for users and blogs.
const rootReducer = combineReducers({
  userReducer,
  blogpostReducer,
});

export default rootReducer;
