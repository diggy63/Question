import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { attemptToDeleteItem } from "_thunks/items";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bulma-companion";

export default function item({ id, name, description, price, photoUrl }) {
  const dispatch = useDispatch();

  function deleteItem() {
    dispatch(attemptToDeleteItem(id));
  }
  return (
    <li className="todo box">
      <article className="Media">
        <div className="media-content">
          <div className="content">
            <p>
              {name}
            </p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
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
