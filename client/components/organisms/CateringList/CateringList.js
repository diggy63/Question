import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";

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
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <CateringMenuList />
      </Container>
    </Box>
  );
}
