import React, { useReducer } from "react";

interface FormType {
  username: string;
  email: string;
  age: number;
}

type ReturnType = [
  form: FormType,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  reset: () => void
];

function reducer(state: any, action: any) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.name]: [action.value],
      };
    case "RESET_INPUT":
      return action.initalForm;
  }
  return state;
}

function useInputs(initalForm: FormType): ReturnType {
  //   const [form, setForm] = useState(initalForm);
  const [form, dispatch] = useReducer(reducer, initalForm);

  //change
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  };
  //reset
  const reset = () => {
    dispatch({
      type: "RESET_INPUT",
      initalForm,
    });
  };
  return [form, onChange, reset];
}

export default useInputs;
