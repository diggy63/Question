import React from 'react';
import AddCateringItem from '_molecules/AddCateringItem';
import CateringItemList from '_organisms/CateringItemList';

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
          <AddCateringItem />
        </Column>
      </Columns>
      <Columns>
        <Column size="8" offset="2" className="has-text-left">
          <CateringItemList />
        </Column>
      </Columns>
    </Section>
  );
}
