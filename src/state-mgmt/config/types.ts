import { UserListState } from '../user-list';

export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  userList: UserListState;
}

export type Reducer<T> = (state: T, action: Action) => T;
