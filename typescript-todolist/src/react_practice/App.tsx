// import React, { useCallback, useMemo, useRef, useState } from "react";
// import CreateUser from "./CreateUser";
// import UserList from "./UserList";

// interface UserType {
//   id: number;
//   username: string;
//   email: string;
//   age: number;
//   active: boolean;
// }

// function countActiveUsers(users: Array<UserType>): number {
//   return users.filter((user) => user.active).length;
// }

// export default function App() {
//   //Input Change Handler
//   const [inputs, setInputs] = useState({
//     username: "",
//     email: "",
//     age: 0,
//   });
//   const { username, email, age } = inputs;
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs, //기존 input copy 후
//       [name]: value, // name 키를 가진 값 -> value로 설정
//     });
//   };

//   //User Array
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: "velopert",
//       email: "public.velopert@gmail.com",
//       age: 20,
//       active: true,
//     },
//     {
//       id: 2,
//       username: "tester",
//       email: "tester@example.com",
//       age: 21,
//       active: false,
//     },
//     {
//       id: 3,
//       username: "liz",
//       email: "liz@example.com",
//       age: 22,
//       active: false,
//     },
//   ]);

//   //Create User Handler
//   const nextId = useRef(4);
//   const onCreate = useCallback(() => {
//     // setUsers([...users, newUser]);
//     setUsers(
//       users.concat({
//         id: nextId.current,
//         username,
//         email,
//         age,
//         active: false,
//       })
//     );
//     setInputs({
//       username: "",
//       email: "",
//       age: 0,
//     });
//     nextId.current += 1;
//   }, [username, email, age]);

//   //Delete Use  r Handler
//   const onRemove = useCallback((id: number) => {
//     setUsers(users.filter((user) => user.id !== id));
//   }, []);

//   const onToggle = useCallback((id: number) => {
//     setUsers(
//       users.map((user) =>
//         user.id === id ? { ...user, active: !user.active } : user
//       )
//     );
//   }, []);

//   //Count Active Users
//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         age={age}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

export default function App() {
  return <></>;
}

// //useMemo : 계산한 값을 재사용하여 성능 최적화
// //useCallback : useMemo랑 비슷. 특정 함수를 만들지 않고 재사용할때 사용.
