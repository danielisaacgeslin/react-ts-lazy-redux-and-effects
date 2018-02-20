export class UserModel {
  public id?: string;
  public name: string = '';

  constructor(args: UserModel) {
    Object.assign(this, args);
  }
}
