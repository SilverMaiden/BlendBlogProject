import { combineReducers } from 'redux';
import { userReducer } from './userReducer.ts';

// rootReducer will eventually be a combination of reducers for users and blogs.
const rootReducer = combineReducers({
  userReducer
});

export default rootReducer;