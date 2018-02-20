import * as React from 'react';

import { UserModel } from '../../models';

export interface HomeState {

}

export interface HomeProps {
  addUser: (user: UserModel) => void;
  userList: UserModel[];
}

export class Home extends React.Component<HomeProps, HomeState> {
  public render(): JSX.Element {
    return (
      <div>
        Home
        <ul>
          {this.props.userList.map((user: UserModel, i: number) => (<li key={i}>{user.name}</li>))}
        </ul>
      </div>
    );
  }
}