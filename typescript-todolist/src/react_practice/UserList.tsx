import React from "react";
import styled from "styled-components";

const UserBlock = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #c0c0c0;
  border-radius: 10px;
`;

interface UserListProps {
  users: { id: number; username: string; email: string; age: number }[];
}

interface UserProps {
  user: {
    id: number;
    username: string;
    email: string;
    age: number;
  };
}

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <UserBlock>
      <p>이름 : {user.username}</p>
      <p>이메일 : {user.email}</p>
      <p>나이 : {user.age}</p>
    </UserBlock>
  );
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <User user={user} />
      ))}
    </>
  );
};

export default UserList;
