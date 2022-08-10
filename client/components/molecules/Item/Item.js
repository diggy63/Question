import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {attemptToDeleteItem} from '_thunks/items'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function item({id,name,description,price}){
    const dispatch = useDispatch()

    function deleteItem(){
        dispatch(attemptToDeleteItem(id))
    }
    return(
        <li className='todo box'>
            <article className='Media'>
                <div className='media-content'>
                    <div className='content'>
                        <p>
                            <h1>{name}</h1>
                        </p>
                        <p>
                            Description:  {description}
                        </p>
                        <p>
                            Price: {price}
                        </p>
                    </div>
                    <nav className='level is-mobile'>
                        <div className='level-right'>
                            <span className='icon' onClick={deleteItem}>
                            <FontAwesomeIcon icon={faTrashCan} size="lg" />
                            </span>
                        </div>
                    </nav>
                </div>
            </article>
        </li>
        
    )
}