import React, { useContext, useRef } from "react";
import useInputs from "./hooks/useInputs";
import { userDispatch } from "./App_contextVer";

function CreateUser() {
  const [{ username, email, age }, onChange, reset] = useInputs({
    username: "",
    email: "",
    age: 0,
  });
  const dispatch = useContext(userDispatch);
  const nextId = useRef(4);

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
        age,
        // active: false,
      },
    });
    reset();
    nextId.current += 1;
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="name"
          name="username"
          value={username}
          onChange={onChange}
          // ref={nameInput}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          value={age}
          onChange={onChange}
        />
        <button onClick={onCreate}>등록</button>
      </div>
    </div>
  );
}

export default React.memo(CreateUser);

// useState 를 통해 여러 Input 상태들을 한번에 관리해본다.
// useRef 를 통해 초기화 버튼을 클릭했을 때 name input에 포커스가 잡히도록 해본다.

// Context API -> dispatch를 이용
// 코드를 계속 업데이트해서 App_contextVer를 이용해야 코드 돌아갈 것.
