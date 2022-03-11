import React, { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'SUCCESS':
      return { loading: false, data: action.data, error: null };
    case 'ERROR':
      return { ...state, error: action.err };
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
}

function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    if (skip) return;
    fetchData();
    // eslint-disable-next-line
  }, deps);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (err) {
      dispatch({ type: 'ERROR', err });
    }
  };

  return [state, fetchData];
}

export default useAsync;
