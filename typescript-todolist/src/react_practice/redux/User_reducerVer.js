import React, { useReducer, useEffect } from 'react';

const API = 'https://jsonplaceholder.typicode.com/users';

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
export default function User() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: [],
    error: null,
  });
  const { loading, data: users, error } = state;

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const res = await fetch(API);
      const data = await res.json();
      dispatch({ type: 'SUCCESS', data });
    } catch (err) {
      dispatch({ type: 'ERROR', err });
    }
  };
  console.log(state);
  return (
    <>
      {loading ? (
        <h1>로딩중</h1>
      ) : (
        <div>
          {users.map((user) => {
            return <div key={user.id}>{user.name}</div>;
          })}
        </div>
      )}
    </>
  );
}
