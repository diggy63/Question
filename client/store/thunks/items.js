import { snakeToCamelCase } from 'json-style-converter/es5';
import R from 'ramda';

import { postItem, getItems, deleteItem } from '_api/items';
import { addItem, setItems, removeItem } from '_actions/items';

import { dispatchError } from '_utils/api';

export const attemptToDeleteItem = id =>  dispatch =>
  deleteItem({id})
    .then(data =>{
      console.log(data)
      dispatch(removeItem(id));
      return  data;

    })
    .catch(dispatchError(dispatch))

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
        console.log("itttttem", Item)
        dispatch(addItem(Item));
        console.log("here")
        return data.user;
    })
    .catch(dispatchError(dispatch));