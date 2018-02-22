import { Action } from '../config';
import { UserListActionTypes } from './actions';
import { UserListState, userListStateName } from './state';
import { reducerRegistry } from '../config/reducer-registry';

export const userListReducer = (state = new UserListState(), action: Action): UserListState => {
  switch (action.type) {
    case UserListActionTypes.ADD_SUCCESS:
      return new UserListState({ list: state.list.concat(action.payload) });
    default:
      return state;
  }
};

reducerRegistry.register(userListStateName, userListReducer);
