import { connect } from 'react-redux';

import { State, userListActions } from '../../state-mgmt';
import { UserModel } from '../../models';
import Home from './Home';

const mapStateToProps = (state: State): { userList: UserModel[] } => ({
  userList: state.userList.list
});

const mapDispatchToProps = (dispatch: any) => ({
  addUser: (user: UserModel): void => dispatch(userListActions.add(user))
});

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
