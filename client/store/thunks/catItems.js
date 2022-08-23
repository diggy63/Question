import { snakeToCamelCase } from 'json-style-converter/es5';
import R, { converge } from 'ramda';

import { postCatItem, getCatItems, deleteCatItem, updateCatItem } from '_api/catItems';
import { setCatItems, addCatItem, removeCatItem, updateCateringItem } from '_actions/catItems';

import { dispatchError } from '_utils/api';

export const attemptToDeleteCateringItem = id =>  dispatch =>
  deleteCatItem({id})
    .then(data =>{
      console.log(data)
      dispatch(removeCatItem(id));
      return data;
    })

export const attemptAddCatItem = text => dispatch =>
  postCatItem(text)
    .then(data => {
        const Item = R.omit(['Id'], R.assoc('id', data.catItem._id, snakeToCamelCase(data.catItem)));
        dispatch(addCatItem(Item));
        return data.user;
    })
    .catch(dispatchError(dispatch));

export const attemptGetCatItems = () => dispatch =>
  getCatItems()
    .then(data => {
      console.log(data)
      const catItems = R.map(catItem =>
        R.omit(['Id'], R.assoc('id', catItem._id, snakeToCamelCase(catItem))), data.catItems);
        dispatch(setCatItems(catItems));
        return data.catItems;
    })
    .catch(dispatchError(dispatch));


export const attemptToUpdateCateringItem = info => dispatch => 
    updateCatItem(info)
    .then(data => {
      dispatch(updateCateringItem({id:info.id, name:info.name, description:info.description, price:info.price, category:info.category}))
    })
    .catch(dispatchError(dispatch))
