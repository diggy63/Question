import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "redux-first-history";
import R from "ramda";

import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';

import OrdersList from "../../organisms/OrdersList";

import { attemptGetItems } from "_thunks/items";

export default function Orders() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(attemptGetItems())
      .catch(R.identity)
      .then(() => setLoading(false));
  }, [dispatch]);

  return (
    <Section className="todo-section">
      <Title size="1" className="has-text-centered">
        Put In Your Order
      </Title>
      <Columns>
        <Column size="8" offset="2" className="has-text-left">
          <OrdersList />
        </Column>
      </Columns>
    </Section>
  );
}
