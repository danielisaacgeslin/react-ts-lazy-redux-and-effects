import { Action } from '../config';
import { UserListActionTypes } from './actions';
import { UserListState } from './state';

export const userListReducer = (state = new UserListState(), action: Action): UserListState => {
  switch (action.type) {
    case UserListActionTypes.ADD_SUCCESS:
      return new UserListState({ list: state.list.concat(action.payload) });
    default:
      return state;
  }
};
