import { UserModel } from '../../models';

export const userListStateName: string = 'userList';

export class UserListState {
  public list: UserModel[] = [new UserModel({ name: 'user 1' }), new UserModel({ name: 'user 2' })];

  constructor(args?: UserListState) {
    if (args) Object.assign(this, args);
  }
}
