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
  Dropdown,
} from "react-bulma-companion";

import { attemptAddCatItem } from "_thunks/catItems";
import useKeyPress from "_hooks/useKeyPress";

export default function AddTodo() {
  const [isToggle, setIsToggle] = useState(false);
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState("");
  const [text, setText] = useState({
    name: "",
    description: "",
    price: "",
    category: "Category",
  });

  const changeToggle = () => {
    setIsToggle(!isToggle)
  }

  const changeCategory = (e) =>{
    setText({...text,category: e.target.innerHTML})
    changeToggle()
  }

  const handleAddTodo = () => {
    dispatch(attemptAddCatItem(text));
    setText({ name: "", description: "", price: "", category: "Category" });
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
              <Label htmlFor="item-name" className="Label">
                Item Name
              </Label>
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
              <Label htmlFor="item-name" className="Label">
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
          <div style={{ minHeight: 50, }} >
            <Dropdown active={isToggle}>
              <Dropdown.Trigger>
                <Button aria-haspopup="true" aria-controls="dropdown-menu" onClick={changeToggle}>
                  <span>{text.category}</span>
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Menu id="dropdown-menu" role="menu">
                <Dropdown.Content>
                  <Dropdown.Item value="Appetizer" onClick={changeCategory}>Appetizer</Dropdown.Item>
                  <Dropdown.Item value="Entree" onClick={changeCategory}>
                    Entree
                  </Dropdown.Item>
                  <Dropdown.Item value="Sides" onClick={changeCategory}>
                    Sides
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown.Menu>
            </Dropdown>

            {/* <Textarea
              placeholder="Catergory"
              name="category"
              value={text.category}
              onChange={updateText}
            /> */}
            </div>
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
