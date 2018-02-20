import { UserModel } from '../../models';

export const UserListActionTypes = {
  'ADD': '[user-list] add',
  'ADD_SUCCESS': '[user-list] add success',
  'ADD_ERROR': '[user-list] add error'
};

export const userListActions = {
  add: (payload: UserModel) => ({ type: UserListActionTypes.ADD, payload }),
  addSuccess: (payload: UserModel) => ({ type: UserListActionTypes.ADD_SUCCESS, payload }),
  addError: (payload?: Error) => ({ type: UserListActionTypes.ADD_ERROR, payload })
};
