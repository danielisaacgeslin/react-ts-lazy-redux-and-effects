import * as redux from 'redux';

import { reducers } from './reducers';

export const store = redux.createStore(reducers);
