import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import { logger } from 'redux-logger';

const middlewares = [logger];

export const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);
