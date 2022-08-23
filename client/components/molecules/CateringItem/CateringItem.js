import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { attemptToDeleteCateringItem } from "_thunks/catItems";

export default function CateringItem({name, description, price, category, id}){
    const dispatch = useDispatch();

    function deleteItem(e){
        dispatch(attemptToDeleteCateringItem(id))
    }
    return(
        <div>
            {name} {description} {price} {category}
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}