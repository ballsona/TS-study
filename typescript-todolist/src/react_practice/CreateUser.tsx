import React, { useState, useRef } from "react";

export default function CreateUser() {
  // state manage
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    age: 0,
  });
  const { username, email, age } = inputs;

  // ref manage
  const nameInput = useRef<HTMLInputElement>(null);

  //event Handler
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, //기존 input copy 후
      [name]: value, // name 키를 가진 값 -> value로 설정
    });
  };
  const onReset = () => {
    setInputs({
      username: "",
      email: "",
      age: 0,
    });
    if (nameInput.current !== null) {
      nameInput.current.focus();
    }
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
          ref={nameInput}
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
      </div>

      <button onClick={onReset}>Reset</button>
    </div>
  );
}

// useState 를 통해 여러 Input 상태들을 한번에 관리해본다.
// useRef 를 통해 초기화 버튼을 클릭했을 때 name input에 포커스가 잡히도록 해본다.
