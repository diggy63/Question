import update from 'immutability-helper';
import R from 'ramda';

import {
  ADD_CATITEM, SET_CATITEMS, REMOVE_CATITEM,
} from '_actions/catItems';

export function catItem(state = {
    completed: false,
  }, action) {
    switch (action.type) {
      case ADD_CATITEM:
        return update(state, {
          id: { $set: action.id },
          name: { $set: action.name },
          price: { $set:action.price},
          description: {$set:action.description},
          category: {$set:action.category},
          createdAt: { $set: action.createdAt },
        });
      default:
        return state;
    }
  }

  export default function items(state = [], action) {
    console.log("action",action)
    const index = R.findIndex(R.propEq('id', action.id), state);
    const updatedAtIndex = { $splice: [[index, 1, catItem(state[index], action)]] };
  
    switch (action.type) {
      case SET_CATITEMS:
        return update(state, { $set: action.catItems });
      case ADD_CATITEM:
        return update(state, { $push: [catItem(undefined, action)] });
      case REMOVE_CATITEM:
        return update(state, {$splice: [[index,1]]})
      default:
        return state;
    }
  }
  