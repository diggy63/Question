import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import R from 'ramda';

import { attemptGetItems } from '_thunks/items';
import AddCateringSection from '_templates/AddCateringSection';


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

  return !loading && (
    <div className="todo-page page">
      <AddCateringSection />
    </div>
  );
}
