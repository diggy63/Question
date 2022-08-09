import { snakeToCamelCase } from 'json-style-converter/es5';
import R from 'ramda';

import { postItem, getItems } from '_api/items';
import { addItem, setItems } from '_actions/items';

import { dispatchError } from '_utils/api';

export const attemptGetItems = () => dispatch =>
  getItems()
    .then(data => {
      const items = R.map(item =>
        R.omit(['Id'], R.assoc('id', item._id, snakeToCamelCase(item))), data.items);
        dispatch(setItems(items));
        return data.items;
    })
    .catch(dispatchError(dispatch));

export const attemptAddItem = text => dispatch =>
  postItem(text)
    .then(data => {
        const Item = R.omit(['Id'], R.assoc('id', data.item._id, snakeToCamelCase(data.item)));
        console.log("HAHAHHHHHHHHHHHHHHHHHHHA",Item)
        dispatch(addItem(Item));
        return data.user;
    })
    .catch(dispatchError(dispatch));