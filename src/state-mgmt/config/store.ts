import * as redux from 'redux';

import { reducerRegistry } from './reducer-registry';
import { State } from './types';

const initialState: State = {
  userList: { list: [] }
}; /** localstorage? */

export const combine = (reducers: redux.ReducersMapObject) => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state: any = null) => state;
    }
  });
  return redux.combineReducers(reducers);
};

export const store = redux.createStore(combine(reducerRegistry.getReducers()), initialState);

reducerRegistry.setChangeListener((reducers: redux.ReducersMapObject) => store.replaceReducer(combine(reducers)));
