import * as redux from 'redux';

import { State, Action } from './types';
import { reducerRegistry } from './reducer-registry';
import { effectRegistry } from './effect-registry';

const initialState: State = {
  userList: { list: [] }
}; /** localstorage? */

export const lazyCombineReducers = (reducers: redux.ReducersMapObject): redux.Reducer<any> => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) reducers[item] = (state: any = null) => state;
  });
  return redux.combineReducers(reducers);
};

const lazyMiddleware: any = (_store: any) => (next: any) => (action: Action) => {
  effectRegistry.getEffects().forEach((effect: any) => effect(action));
  next(action);
};

export const store: redux.Store<State> = redux.createStore(
  lazyCombineReducers(reducerRegistry.getReducers()),
  initialState,
  redux.applyMiddleware(lazyMiddleware)
);

reducerRegistry.setChangeListener((reducers: redux.ReducersMapObject): void => {
  store.replaceReducer(lazyCombineReducers(reducers));
});