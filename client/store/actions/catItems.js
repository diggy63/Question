export const ADD_CATITEM = 'ADD_CATITEM'
export const SET_CATITEMS = 'SET_CATITEMS'

export const addCatItem = ({id, name, description, price, createdAt, category }) => ({
    type: ADD_CATITEM,
    createdAt,
    id,
    name,
    description,
    price,
    category,
})

export const setCatItems = catItems => ({
    type:SET_CATITEMS,
    catItems,
})