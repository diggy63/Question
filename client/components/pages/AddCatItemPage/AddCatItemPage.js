import AddCateringItem from '_molecules/AddCateringItem';
import CateringItemList from '_organisms/CateringItemList';

import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import R from 'ramda';

import { attemptGetItems } from '_thunks/items';


export default function AddCatItemPage() {

  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    } else {
      dispatch(attemptGetItems())
        .catch(R.identity)
        .then(() => setLoading(false));
    }
  }, [dispatch, user]);

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
