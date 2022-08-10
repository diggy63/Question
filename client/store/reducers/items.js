import update from 'immutability-helper';
import R from 'ramda';

import {
  ADD_ITEM, SET_ITEMS, REMOVE_ITEM,
} from '_actions/items';

import { LOGOUT_USER } from '_actions/user';

export function item(state = {
  completed: false,
}, action) {
  switch (action.type) {
    case ADD_ITEM:
      return update(state, {
        id: { $set: action.id },
        name: { $set: action.name },
        price: { $set:action.price},
        description: {$set:action.description},
        photoUrl: {$set:action.photoUrl},
        createdAt: { $set: action.createdAt },
      });
    default:
      return state;
  }
}

export default function items(state = [], action) {
  const index = R.findIndex(R.propEq('id', action.id), state);
  const updatedAtIndex = { $splice: [[index, 1, item(state[index], action)]] };

  switch (action.type) {
    case SET_ITEMS:
      return update(state, { $set: action.items });
    case ADD_ITEM:
      return update(state, { $push: [item(undefined, action)] });
    case REMOVE_ITEM:
      return update(state, {$splice: [[index,1]]});
    default:
      return state;
  }
}
