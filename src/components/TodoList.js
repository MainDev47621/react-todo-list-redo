import React from 'react';
import { Todo } from './Todo';

export function TodoList({ todos, dispatch={dispatch} }) {
    return (
        <ul>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </ul>
    )
}