import React, { useState } from "react";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState("");

  return (
    <Box className="general-profile">
      <Title size="3">Appitizers</Title>
      <hr className="separator" />
      <Container>
       <CateringMenuList />
      </Container>
    </Box>
  );
}
