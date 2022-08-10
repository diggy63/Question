import React from 'react';
import { useSelector } from 'react-redux';
import R from 'ramda';

import Item from '_molecules/Item';

export default function TodoList() {
  const { items } = useSelector(R.pick(['items']));
  console.log(items)
  
  return (
    <ul className="todo-list">
        {R.reverse(items).map(item => <Item key={item.id} {...item} />)}
    </ul>
  );
}
