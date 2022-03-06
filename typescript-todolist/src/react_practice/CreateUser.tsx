import React from "react";

interface CreateUserProps {
  username: string;
  email: string;
  age: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCreate: () => void;
}

function CreateUser({
  username,
  email,
  age,
  onChange,
  onCreate,
}: CreateUserProps) {
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

// const nameInput = useRef<HTMLInputElement>(null);
// const onReset = () => {
//   if (nameInput.current !== null) {
//     nameInput.current.focus();
// };
