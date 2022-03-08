import React, {
  useReducer,
  createContext,
  useContext,
  useRef,
  Dispatch,
} from 'react';

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type Action =
  | { type: 'CREATE'; todo: Todo }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number };

type TodoDispatch = Dispatch<Action>;

const initialTodos: Todo[] = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    // default:
    //   throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// import {} 를 사용하면 export 안해도 된다고 자료에는 나와있는데, export 를 생략하면 오류가 뜸.. TS 때문인가?
const TodoStateContext = createContext<Todo[] | null>(null);
const TodoDispatchContext = createContext<TodoDispatch | null>(null);
const TodoNextIdContext = createContext<React.MutableRefObject<number> | null>(
  null
);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState(): Todo[] {
  const context = useContext(TodoStateContext);
  // TodoProvider에 감싸져 있지 않으면 에러발생
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextIdDispatch() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
