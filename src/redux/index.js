/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, middlewares);

export { store };
