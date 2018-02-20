import { UserListState } from '../user-list';

export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  userList: UserListState;
}
