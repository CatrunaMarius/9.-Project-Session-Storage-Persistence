import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReaducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReaducer, applyMiddleware(...middlewares));

export default store
