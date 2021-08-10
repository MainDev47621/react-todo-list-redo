import React from 'react';
import { Todo } from '../components/Todo';

export function TodoContainer({ todo, dispatch }) {
    return <Todo todo={todo} dispatch={dispatch} />;
}