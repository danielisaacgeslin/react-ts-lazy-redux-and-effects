import { combineReducers } from 'redux';

import { userListReducer } from '../user-list';

export const reducers = combineReducers({
  userList: userListReducer
});
