import React from "react";
import styled from "styled-components";

const UserBlock = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #c0c0c0;
  border-radius: 10px;
`;

const UserNameBlock = styled.span<{ active: boolean }>`
  color: ${(props) => (props.active ? "green" : "black")};
`;

interface UserListProps {
  users: {
    id: number;
    username: string;
    email: string;
    age: number;
    active: boolean;
  }[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

function UserList({ users, onRemove, onToggle }: UserListProps) {
  return (
    <>
      {users.map((user) => (
        <UserBlock key={user.id}>
          <div onClick={() => onToggle(user.id)}>
            <UserNameBlock active={user.active}>{user.username}</UserNameBlock>(
            {user.email}) : {user.age}
          </div>
          <button onClick={() => onRemove(user.id)}>삭제</button>
        </UserBlock>
      ))}
    </>
  );
}

export default React.memo(UserList);
