import { combineReducers } from 'redux';

import user from './user';
import todos from './todos';
import items from "./items";
import catItems from './catItems'

const createRootReducer = routerReducer => combineReducers({
  router: routerReducer,
  user,
  todos,
  items,
  catItems,
});

export default createRootReducer;
