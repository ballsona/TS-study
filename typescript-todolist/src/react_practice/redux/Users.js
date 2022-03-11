import React, { useState, useEffect } from 'react';

const API = 'https://jsonplaceholder.typicode.com/users';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
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
