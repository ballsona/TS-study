import React from 'react';
import { UserProvider } from './UsersContext';
import Users from './Users_contextVer';

export default function App() {
  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
}
