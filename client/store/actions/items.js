
export const ADD_ITEM = 'ADD_ITEM';
export const SET_ITEMS = 'SET_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM'



export const addItem = ({ id, name, description, price, createdAt }) => ({
  type: ADD_ITEM,
  createdAt,
  id,
  name,
  description,
  price,
});

export const setItems = items => ({
  type: SET_ITEMS,
  items,
})

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id,
})