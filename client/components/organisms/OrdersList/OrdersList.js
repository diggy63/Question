import React from 'react';
import { useSelector } from 'react-redux';
import R from 'ramda';

import Item from '_molecules/Item';

export default function TodoList() {
  const { items } = useSelector(R.pick(['items']));
  const avail = n => n.available === true;
  const availItems = R.filter(avail,items)
  
  return (
    <ul className="todo-list">
        {R.reverse(availItems).map(item => <Item key={item.id} {...item} />)}
    </ul>
  );
}