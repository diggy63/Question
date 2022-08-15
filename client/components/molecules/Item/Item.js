import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import R from "ramda";

import { attemptToDeleteItem } from "_thunks/items";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Field, Control, Checkbox } from "react-bulma-companion";
import { faSquare } from "@fortawesome/free-regular-svg-icons/faSquare";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons/faSquareCheck";

import { attemptToMakeItemAvailable } from "_thunks/items";

export default function item({
  id,
  name,
  description,
  price,
  photoUrl,
  available,
}) {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(["user"]));
  const [auth, setAuth] = useState(!R.isEmpty(user));

  function deleteItem() {
    dispatch(attemptToDeleteItem(id));
  }

  function toggleAvailableItem() {
    dispatch(attemptToMakeItemAvailable(id));
  }
  return (
    <li className="todo box">
      <article className="Media">
        <div className="media-content">
          <div className="content">
            <p>{name}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            {auth ? (
              <span className="icon" onClick={toggleAvailableItem}>
                {available ? (
                  <FontAwesomeIcon icon={faSquareCheck} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faSquare} size="lg" />
                )}
              </span>
            ) : null}
            {auth ? (
            <div className="level-right">
              <span className="icon" onClick={deleteItem}>
                <FontAwesomeIcon icon={faTrashCan} size="lg" />
              </span>
            </div>) : null}
            <Image size="64x64">
              <Image.Content src={photoUrl} />
            </Image>
          </div>
        </div>
      </article>
    </li>
  );
}
