import { store, Action, Effect, effectRegistry } from '../config';
import { UserListActionTypes, userListActions } from './actions';
import { UserModel } from '../../models';

const addUserEffect: Effect = (action: Action): void => {
  setTimeout(() => {
    const newUser: UserModel = new UserModel({ ...action.payload, id: Date.now() });
    store.dispatch(userListActions.addSuccess(newUser));
  }, 500);
};

export const userListEffects = { addUserEffect };

effectRegistry.register(UserListActionTypes.ADD, userListEffects.addUserEffect);
