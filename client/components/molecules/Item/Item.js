import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {attemptToDeleteItem} from '_thunks/items'

export default function item({id,name,description,price}){
    const dispatch = useDispatch()

    function deleteItem(){
        dispatch(attemptToDeleteItem(id))
    }
    return(
        <div>
            <div>
            {name}
            </div>
            {description}
            <div>
            {price}
            </div>
            <button onClick={deleteItem} value={id}>Delete</button>
        </div>
    )
}