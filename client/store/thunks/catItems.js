import { snakeToCamelCase } from 'json-style-converter/es5';
import R, { converge } from 'ramda';

import { postCatItem, getCatItems } from '_api/catItems';
import { setCatItems } from '_actions/catItems';

import { dispatchError } from '_utils/api';

export const attemptAddCatItem = text => dispatch =>
  postCatItem(text)
    .then(data => {
        console.log('after Api Call')
        const Item = R.omit(['Id'], R.assoc('id', data.catItem._id, snakeToCamelCase(data.catItem)));
        dispatch(addCatItem(Item));
        console.log('changed state')
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