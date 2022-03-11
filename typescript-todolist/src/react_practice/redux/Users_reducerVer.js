import React, { useState } from 'react';
import { useAsync } from 'react-async';
// import useAsync from '../hooks/useAsync';
import UserInfo from './UserInfo';

const API = 'https://jsonplaceholder.typicode.com/users';

const getUserData = async () => {
  const res = await fetch(API);
  const data = await res.json();
  return data;
};

export default function Users() {
  const [userId, setUserId] = useState(null);
  // const [state, refetch] = useAsync(getUserData, [], true);
  // const { loading, data: users, error } = state;
  const { data: users, error, isLoading, reload } = useAsync(getUserData);

  // 삼항연산자(?) 안쓰고 이런 방법도 있구나.
  if (isLoading) return <h1>로딩중</h1>;
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
          reload();
          setUserId(null); //데이터를 다시 불러왔을 때 id값도 초기화함으로서
        }}
      >
        다시 불러오기
      </button>
      <div>{userId && <UserInfo id={userId} />}</div>
    </>
  );
}
