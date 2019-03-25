import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducer';

const initialState = {};
const middleware = applyMiddleware(
  createLogger({ diff: true })
);

export default createStore(reducer, initialState, middleware);
