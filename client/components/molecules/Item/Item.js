import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { attemptToDeleteItem } from "_thunks/items";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Field, Control, Checkbox } from "react-bulma-companion";
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons/faSquareCheck';

import { attemptToMakeItemAvailable } from "_thunks/items"


export default function item({ id, name, description, price, photoUrl, available }) {
  const dispatch = useDispatch();

  function deleteItem() {
    dispatch(attemptToDeleteItem(id));
  }
  console.log(available)

  function toggleAvailableItem(){
    dispatch(attemptToMakeItemAvailable(id))
  }
  return (
    <li className="todo box">
      <article className="Media">
        <div className="media-content">
          <div className="content">
            <p>{name}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <span className="icon" onClick={toggleAvailableItem}>
            {available
              ? <FontAwesomeIcon icon={faSquareCheck} size="lg" />
              : <FontAwesomeIcon icon={faSquare} size="lg" />}
          </span>
            <Image size="128x128">
              <Image.Content src={photoUrl} />
            </Image>
          </div>
          
          <nav className="level is-mobile">
            <div className="level-right">
              <span className="icon" onClick={deleteItem}>
                <FontAwesomeIcon icon={faTrashCan} size="lg" />
              </span>
            </div>
          </nav>
        </div>
      </article>
    </li>
  );
}
