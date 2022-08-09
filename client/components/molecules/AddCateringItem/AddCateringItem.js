import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';
import Button from 'react-bulma-companion/lib/Button';
import Input from 'react-bulma-companion/lib/Input';

import { attemptAddItem } from '_thunks/items';
import useKeyPress from '_hooks/useKeyPress';

export default function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState({
    name: "",
    description: "",
    price: ""
  });

  const handleAddTodo = () => {
    if (text) {
      dispatch(attemptAddItem(text));
      setText({name:'', description:'',price:''});
    }
  };

  useKeyPress('Enter', handleAddTodo);

  function updateText(e){
    setText({...text,
    [e.target.name]:e.target.value})
  }

  return (
    <Columns className="add-todo" gapless>
      <Column size="10">
        <Input name="name" value={text.name} onChange={updateText} />
        <Input name="description" value={text.description} onChange={updateText} />
        <Input name="price" value={text.price} onChange={updateText} />
      </Column>
      <Column size="2">
        <Button color="success" onClick={handleAddTodo} fullwidth>
          Add
        </Button>
      </Column>
    </Columns>
  );
}
