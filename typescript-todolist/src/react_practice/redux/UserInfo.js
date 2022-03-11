import React, { useState } from 'react';
import { useAsync } from 'react-async';
// import useAsync from '../hooks/useAsync';

const getUserData = async ({ id }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
};

export default function UserInfo({ id }) {
  //   const [state] = useAsync(() => getUserData(id), [id]);
  const {
    data: user,
    error,
    isLoading,
  } = useAsync({
    promiseFn: getUserData,
    id,
    watch: id,
  });
  console.log(user);

  // 삼항연산자(?) 안쓰고 이런 방법도 있구나.
  if (isLoading) return <h1>로딩중</h1>;
  if (error) return <h1>에러남</h1>;
  if (!user) return null;

  return (
    <>
      <h2>{user.name}</h2>
      <div>Email : {user.email}</div>
    </>
  );
}
