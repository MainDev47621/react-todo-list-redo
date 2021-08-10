import React, { useReducer } from 'react';
import { Main } from '../components/Main';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, completed: false };
}

export function MainContainer() {
  const [todos, dispatch] = useReducer(reducer, []);

  function addTodo(name) {
    console.log('testing ' + name);
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
  }

  return (
    <Main todos={todos} dispatch={dispatch} addTodo={addTodo} />
  );
}
