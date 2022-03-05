import React, { useReducer } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      age: 20,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      age: 21,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      age: 22,
    },
  ],
};

interface UserType {
  id: number;
  username: string;
  email: string;
  age: number;
}

export default function App() {
  const users: Array<UserType> = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      age: 20,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      age: 21,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      age: 22,
    },
  ];
  return (
    <>
      <CreateUser />
      <UserList users={users} />
    </>
  );
}
