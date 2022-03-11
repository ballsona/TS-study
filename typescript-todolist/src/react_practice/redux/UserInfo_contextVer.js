import React from 'react';
import { getUser, useUsersDispatch, useUsersState } from './UsersContext';

export default function UserInfo({ id }) {
  const {
    user: { loading, data: user, error },
  } = useUsersState();
  const dispatch = useUsersDispatch();
  const loadUserInfo = (id) => {
    getUser(dispatch, id);
  };
  loadUserInfo(id);

  // 삼항연산자(?) 안쓰고 이런 방법도 있구나.
  if (loading) return <h1>로딩중</h1>;
  if (error) return <h1>에러남</h1>;
  if (!user) return null;

  return (
    <>
      <h2>{user.name}</h2>
      <div>Email : {user.email}</div>
    </>
  );
}
