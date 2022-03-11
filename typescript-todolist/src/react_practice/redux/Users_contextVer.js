import React, { useState } from 'react';
import UserInfo from './UserInfo_contextVer';
import { getUsers, useUsersDispatch, useUsersState } from './UsersContext';

export default function Users() {
  const {
    users: { loading, data: users, error },
  } = useUsersState();
  const dispatch = useUsersDispatch();
  const [userId, setUserId] = useState(null);

  const loadUsersData = () => {
    getUsers(dispatch);
  };
  // 삼항연산자(?) 안쓰고 이런 방법도 있구나.
  if (loading) return <h1>로딩중</h1>;
  if (error) return <h1>에러남</h1>;
  if (!users) return null;
  return (
    <>
      <div>
        <ul>
          {users.map((user) => {
            return (
              <li
                key={user.id}
                onClick={() => setUserId(user.id)}
                style={{ curson: 'pointer' }}
              >
                {user.username} ({user.name})
              </li>
            );
          })}
        </ul>
      </div>
      <button
        onClick={() => {
          loadUsersData();
          setUserId(null); //데이터를 다시 불러왔을 때 id값도 초기화함으로서
        }}
      >
        다시 불러오기
      </button>
      <div>{userId && <UserInfo id={userId} />}</div>
    </>
  );
}
