import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { File, Input, Button, Column, Columns } from "react-bulma-companion";

import { attemptAddItem } from "_thunks/items";
import useKeyPress from "_hooks/useKeyPress";

export default function AddTodo() {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState("");
  const [text, setText] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleAddTodo = () => {
    console.log(selectedFile)
    const formD = new FormData();
    formD.append("photo", selectedFile)
    console.log(formD["photo"])
    for (let fn in text){
      formD.append(fn,text[fn])
    }
    if (formD) {
      dispatch(attemptAddItem(formD));
      setText({ name: "", description: "", price: "" });
    }
  };

  useKeyPress("Enter", handleAddTodo);

  function updateText(e) {
    setText({ ...text, [e.target.name]: e.target.value });
  }

  function updateFile(e) {
    setSelectedFile(e.target.files[0]);
  }

  return (
    <Columns className="add-todo" gapless>
      <Column size="10">
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={text.name}
          onChange={updateText}
        />
        <Input
          type="text"
          placeholder="Description"
          name="description"
          value={text.description}
          onChange={updateText}
        />
        <Input
          type="text"
          placeholder="Price"
          name="price"
          value={text.price}
          onChange={updateText}
        />
        <input type="file" name="photo"
       accept="image/png, image/jpeg" onChange={updateFile}/>
      </Column>
      <Column size="2">
        <Button color="success" onClick={handleAddTodo} fullwidth>
          Add
        </Button>
      </Column>
    </Columns>
  );
}
