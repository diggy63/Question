import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import R from 'ramda'

import {
  File,
  Input,
  Button,
  Column,
  Columns,
  Section,
  Container,
  Box,
  Title,
  Textarea,
  Field,
  Label,
  Control,
} from "react-bulma-companion";

import CateringMenuList from "../../molecules/CateringMenuList/CateringMenuList";

import { attemptAddItem } from "_thunks/items";
import useKeyPress from "_hooks/useKeyPress";

export default function AddTodo() {
  const { catItems } = useSelector(R.pick(["catItems"]));
  const entreeItems = catItems.filter(item =>{
    if(item.category === "Entree"){
      return item
    }
  })
  const appsItems = catItems.filter(item =>{
    if(item.category === "Appetizer"){
      return item
    }
  })
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState("");

  return (
    <Box className="general-profile">
      <Title size="3">Appetizers</Title>
      <hr className="separator" />
      <Container>
        <CateringMenuList items={appsItems} />
      </Container>
      <Title size="3">Entrees</Title>
      <hr className="separator" />
      <Container>
        <CateringMenuList items={entreeItems} />
      </Container>
    </Box>
  );
}
