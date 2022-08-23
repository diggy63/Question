export const ADD_CATITEM = 'ADD_CATITEM'
export const SET_CATITEMS = 'SET_CATITEMS'
export const REMOVE_CATITEM = 'REMOVE_CATITEM'
export const UPDATE_CATITEM = 'UPDATE_CATITEM'

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

export const removeCatItem = id => ({
    type: REMOVE_CATITEM,
    id,
})

export const updateCateringItem = ({id , name, description, price, category}) =>({
    type: UPDATE_CATITEM,
    id,
    name,
    description,
    price,
    category,

})