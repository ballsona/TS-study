// import React, { useMemo, useReducer, useRef } from "react";
// import CreateUser from "./CreateUser";
// import UserList from "./UserList";
// import useInputs from "./useInputs";

// interface UserType {
//   id: number;
//   username: string;
//   email: string;
//   age: number;
//   active: boolean;
// }

// const initialState = {
//   inputs: {
//     username: "",
//     email: "",
//     age: 0,
//   },
//   users: [
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
//       active: true,
//     },
//   ],
// };

// function countActiveUsers(users: Array<UserType>): number {
//   console.log("활성화된 사용자 카운트..");
//   return users.filter((user) => user.active).length;
// }

// //TODO : 타입 설정해줄 것
// function reducer(
//   state: {
//     inputs: object;
//     users: UserType[];
//   },
//   action: any
// ) {
//   switch (action.type) {
//     case "CREATE_USER":
//       return {
//         inputs: initialState.inputs,
//         users: [...state.users, action.user],
//       };
//     case "REMOVE_USER":
//       return {
//         ...state,
//         users: state.users.filter((user: UserType) => user.id !== action.id),
//       };
//     case "TOGGLE_USER":
//       return {
//         ...state,
//         users: state.users.map((user: UserType) =>
//           user.id === action.id ? { ...user, active: !user.active } : user
//         ),
//       };
//   }
//   return state;
// }

// export default function App() {
//   const [{ username, email, age }, onChange, reset] = useInputs({
//     username: "",
//     email: "",
//     age: 0,
//   });
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { users } = state;

//   const nextId = useRef(initialState.users.length + 1);

//   const onCreate = () => {
//     dispatch({
//       type: "CREATE_USER",
//       user: {
//         id: nextId.current,
//         username,
//         email,
//         age,
//         active: false,
//       },
//     });
//     reset();
//     nextId.current += 1;
//   };
//   const onRemove = (id: number) => {
//     console.log("Remove");
//     dispatch({
//       type: "REMOVE_USER",
//       id,
//     });
//   };
//   const onToggle = (id: number) => {
//     console.log("Toggle");
//     dispatch({
//       type: "TOGGLE_USER",
//       id,
//     });
//   };

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
// // 둘의 차이는?
