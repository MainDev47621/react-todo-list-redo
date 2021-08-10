import React from 'react';
import { FormContainer } from '../containers/FormContainer';
import { TodoList } from './TodoList';

export function Main({todos, dispatch, addTodo}) {
  return (
    <div>
      <FormContainer addTodo={addTodo} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}
