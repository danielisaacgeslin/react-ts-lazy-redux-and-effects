import { UserModel } from '../../models';
import { userListStateName } from './state';

export const UserListActionTypes = {
  'ADD': `[${userListStateName}] add`,
  'ADD_SUCCESS': `[${userListStateName}] add success`,
  'ADD_ERROR': `[${userListStateName}] add error`
};

export const userListActions = {
  add: (payload: UserModel) => ({ type: UserListActionTypes.ADD, payload }),
  addSuccess: (payload: UserModel) => ({ type: UserListActionTypes.ADD_SUCCESS, payload }),
  addError: (payload?: Error) => ({ type: UserListActionTypes.ADD_ERROR, payload })
};
