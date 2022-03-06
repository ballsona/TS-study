import React from "react";
import User from "./User";

interface UserListProps {
  users: {
    id: number;
    username: string;
    email: string;
    age: number;
    active: boolean;
  }[];
}

function UserList({ users }: UserListProps) {
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
}

export default React.memo(UserList);
