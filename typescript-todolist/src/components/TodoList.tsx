import React from 'react';
import styled from 'styled-components';
import TodoItem from '../TodoItem';

import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            text={todo.text}
            done={todo.done}
            key={todo.id}
          />
        );
      })}
    </TodoListBlock>
  );
}
