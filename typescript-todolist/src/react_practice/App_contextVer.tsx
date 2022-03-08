import React, { useMemo, useReducer, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import produce from 'immer';

interface UserType {
  id: number;
  username: string;
  email: string;
  age: number;
  active: boolean;
}

const initialState = {
  inputs: {
    username: '',
    email: '',
    age: 0,
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      age: 20,
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      age: 21,
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      age: 22,
      active: true,
    },
  ],
};

function countActiveUsers(users: Array<UserType>): number {
  console.log('활성화된 사용자 카운트..');
  return users.filter((user) => user.active).length;
}

//TODO : reducer 타입 설정 어떻게 해야하는가?
function reducer(
  state: {
    inputs: {};
    users: UserType[];
  },
  action: any
) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        //TODO : Immer + typescript .. how??
        const removeIndex: any = draft.users.find(
          (user) => user.id === action.id
        );
        draft.users.splice(removeIndex, 1);
      });
    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        //TODO : Immer + typescript .. how??
        const targetUser: any = draft.users.find(
          (user) => user.id === action.id
        );
        targetUser.active = !targetUser?.active;
      });
  }
  return state;
}

//TODO : dispatch는 타입을 어찌해야하는 것인가..
export const userDispatch = React.createContext<any>(null);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  const [number, setNumber] = useState(0);
  const plusNumber = () => {
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    console.log('plus');
  };
  return (
    <userDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div>
      <div>{number}</div>
      <button onClick={plusNumber}>+1</button>
    </userDispatch.Provider>
  );
}

//ContextAPI -> 프로젝트 상태를 전역적으로 관리 가능!
