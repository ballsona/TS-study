import { useState, useCallback, useReducer } from "react";

//TODO : App_reducer 75번째 에러남. any로 처리했으나 다시 처리...
interface formType {
  user: {
    username: string;
    email: string;
    age: number;
  };
  username: string;
}
interface stateType {
  user: {
    username: string;
    email: string;
    age: number;
  };
}

function reducer(state: any, action: any) {
  return state;
}
function useInputs(initalForm: formType) {
  const [form, setForm] = useState<formType>(initalForm);
  //change
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form: formType) => ({
      ...form,
      [name]: value,
    }));
  };
  console.log(form);
  return [form, onChange];
}

export default useInputs;
