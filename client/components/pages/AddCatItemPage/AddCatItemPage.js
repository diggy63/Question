import React from 'react';
import AddTodo from '_molecules/AddTodo';
import TodoList from '_organisms/TodoList';

import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';

export default function AddCatItemPage() {
  return (
    <Section className="todo-section">
      <Title size="1" className="has-text-centered">
        Catering Items List
      </Title>
      <Columns>
        <Column size="8" offset="2" className="has-text-centered">
          <AddTodo />
        </Column>
      </Columns>
      <Columns>
        <Column size="8" offset="2" className="has-text-left">
          <TodoList />
        </Column>
      </Columns>
    </Section>
  );
}
