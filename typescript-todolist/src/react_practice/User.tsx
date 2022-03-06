import React, { useContext } from "react";
import styled from "styled-components";
import { userDispatch } from "./App_contextVer";

const UserBlock = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #c0c0c0;
  border-radius: 10px;
`;

const UserNameBlock = styled.span<{ active: boolean }>`
  color: ${(props) => (props.active ? "green" : "black")};
`;

interface UserProps {
  user: {
    id: number;
    username: string;
    email: string;
    age: number;
    active: boolean;
  };
}

export default function User({ user }: UserProps) {
  const dispatch = useContext(userDispatch);

  return (
    <UserBlock key={user.id}>
      <div onClick={() => dispatch({ type: "TOGGLE_USER", id: user.id })}>
        <UserNameBlock active={user.active}>{user.username}</UserNameBlock>(
        {user.email}) : {user.age}
      </div>
      <button onClick={() => dispatch({ type: "REMOVE_USER", id: user.id })}>
        삭제
      </button>
    </UserBlock>
  );
}
