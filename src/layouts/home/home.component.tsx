import * as React from 'react';

import { UserModel } from '../../models';

export interface HomeState {

}

export interface HomeProps {
  addUser: (user: UserModel) => void;
  userList: UserModel[];
}

export class Home extends React.Component<HomeProps, HomeState> {
  public addUser(name: string): void {
    this.props.addUser(new UserModel({ name }));
  }

  public render(): JSX.Element {
    return (
      <div>
        <p>Home</p>
        <input type="text" placeholder="new user name" onInput={(event: any) => this.addUser(event.target.value)} />
        <ul>
          {this.props.userList.map((user: UserModel, i: number) => (<li key={i}>{user.name}</li>))}
        </ul>
      </div>
    );
  }
}