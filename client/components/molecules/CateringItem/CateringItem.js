import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons/faReply';

import { attemptToDeleteCateringItem, attemptToUpdateCateringItem } from "_thunks/catItems";

import {
    Button,
    Box,
    Modal,
    Media,
    Content,
    Input,
    Level,
    Image,
    Icon
  } from "react-bulma-companion";

export default function CateringItem({
  name,
  description,
  price,
  category,
  id,
}) {
  const [isModal, setIsModal] = useState(false)
  const [item,setItem] = useState({
    id: id,
    name: name,
    description: description,
    price: price,
    category: category,
  })
  const dispatch = useDispatch();

  function deleteItem(e) {
    dispatch(attemptToDeleteCateringItem(id));
  }
  function toggleModal(e) {
    setIsModal(!isModal)

  }
  function updateCatItem(){
    console.log(item)
    dispatch(attemptToUpdateCateringItem(item))
    setIsModal(!isModal)
  }
  function updateItemInfo(e){
    setItem({...item,
        [e.target.name]:e.target.value
    })
  }
  return (
    <div>
      {name} {description} {price} {category}
      <button onClick={deleteItem}>Delete</button>
      <button onClick={toggleModal}>Update</button>
      <Modal active={isModal}>
        <Modal.Background />
        <Modal.Content>
          <Box>
            <Media>
              <Media.Content>
                <Content>
                    Name
                  <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={item.name}
                  onChange={updateItemInfo}
                />
                    Description
                  <Input
                  type="text"
                  placeholder="description"
                  name="description"
                  value={item.description}
                  onChange={updateItemInfo}
                />
                    Price
                  <Input
                  type="text"
                  placeholder="Price"
                  name="price"
                  value={item.price}
                  onChange={updateItemInfo}
                />
                    Category
                  <Input
                  type="text"
                  placeholder="Category"
                  name="category"
                  value={item.category}
                  onChange={updateItemInfo}
                />
                </Content>
              </Media.Content>
            </Media>
          </Box>
          <Button onClick={updateCatItem}>Update</Button>
          <Button onClick={toggleModal}>Exit</Button>
          
        </Modal.Content>
        <Modal.Close size="large" />
      </Modal>
    </div>
  );
}
