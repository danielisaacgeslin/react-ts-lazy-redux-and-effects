import * as React from 'react';

import { UserModel } from '../../models';

export interface HomeState {
  newUser: UserModel;
}

export interface HomeProps {
  addUser: (user: UserModel) => void;
  userList: UserModel[];
}

export class Home extends React.Component<HomeProps, HomeState> {
  public state: HomeState;

  public componentWillMount(): void {
    this.resetState();
  }

  public resetState(): void {
    this.setState({ newUser: new UserModel({ name: '' }) });
  }

  public addUser(event: Event): void {
    event.preventDefault();
    this.props.addUser(this.state.newUser);
    this.resetState();
  }

  public updateUserProp(name: string, prop: any): void {
    const newUser: UserModel = { ...this.state.newUser, ...{ [name]: prop } };
    this.setState({ ...this.state, newUser });
  }

  public render(): JSX.Element {
    return (
      <div>
        <p>Home</p>
        <form onSubmit={(event: any) => this.addUser(event)}>
          <input
            type="text"
            placeholder="new user name"
            value={this.state.newUser.name}
            onChange={(event: any) => this.updateUserProp('name', event.target.value)}
          />
          <button type="submit">submit new user</button>
        </form>
        <ul>
          {this.props.userList.map((user: UserModel, i: number) => (
            <li key={i}>id: {user.id} | name: {user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}