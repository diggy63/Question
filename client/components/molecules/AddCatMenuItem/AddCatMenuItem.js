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

import { attemptAddCatItem } from "_thunks/catItems";
import useKeyPress from "_hooks/useKeyPress";

export default function AddTodo() {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState("");
  const [text, setText] = useState({
    name: "",
    description: "",
    price: '',
    category:'',
  });

  const handleAddTodo = () => {
      dispatch(attemptAddCatItem(text));
      setText({ name: "", description: "", price: "", category:"" });
  };

  useKeyPress("Enter", handleAddTodo);

  function updateText(e) {
    setText({ ...text, [e.target.name]: e.target.value });
  }


  return (
    <Box className="general-profile">
      <Title size="3">Create New Catering Menu Item</Title>
      <hr className="separator" />
      <Container>
        <Columns>
          <Column size="2">
            <Field>
              <Label htmlFor="item-name" className='Label'>
                Item Name</Label>
              <Control>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={text.name}
                  onChange={updateText}
                />
              </Control>
            </Field>
          </Column>
          <Column size="2">
          <Field>
              <Label htmlFor="item-name" className='Label'>
                Price
                </Label>
              <Control>
            <Input
              placeholder="Price"
              name="price"
              value={text.price}
              onChange={updateText}
            />
            </Control>
            </Field>
          </Column>
        </Columns>
        <Columns>
          <Column size="4">
            <Textarea
              placeholder="Description"
              name="description"
              value={text.description}
              onChange={updateText}
            />
          </Column>
        </Columns>
        <Columns>
        <Column size="3">
            <Textarea
              placeholder="Catergory"
              name="category"
              value={text.category}
              onChange={updateText}
            />
          </Column>
          <Column size="1">
            <Button color="success" onClick={handleAddTodo} fullwidth>
              Add
            </Button>
          </Column>
        </Columns>
      </Container>
    </Box>
  );
}
