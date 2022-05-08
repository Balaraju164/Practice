import React, { useEffect } from 'react';
//import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
  try {
    return await axios.get(`${BASE_URL}/users`);
  } catch (e) {
    return [];
  }
};

const JestExample = () => {
  const dispatch = useDispatch();
  const countState = useSelector((state) => state.count);
  const { count } = countState;

  useEffect(() => {
    console.log(fetchUsers());
  }, []);

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <>
      <h1 data-testid='counter'>{count}</h1>
      <button data-testid='button-up' onClick={increment}>
        Up
      </button>
      <button data-testid='button-down' onClick={decrement}>
        Down
      </button>
    </>
  );
};

export default JestExample;
