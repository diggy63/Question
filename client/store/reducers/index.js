import { combineReducers } from 'redux';

import user from './user';
import todos from './todos';
import items from "./items"

const createRootReducer = routerReducer => combineReducers({
  router: routerReducer,
  user,
  todos,
  items,
});

export default createRootReducer;
