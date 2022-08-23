import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "redux-first-history";
import R from "ramda";

import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';

import Cateringlist from "../../organisms/CateringList"

import { attemptGetCatItems } from "_thunks/catItems";

export default function Orders() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(attemptGetCatItems())
        .catch(R.identity)
        .then(() => setLoading(false));
    }, [dispatch]);

  return (
    <Section className="todo-section">
      <Title size="1" className="has-text-centered">
        Catering Menu
      </Title>
      <Columns>
        <Column size="8" offset="2" className="has-text-centered">
            <Cateringlist/>
        </Column>
      </Columns>
      <Columns>
        <Column size="8" offset="2" className="has-text-left">
        </Column>
      </Columns>
    </Section>
  );
}
