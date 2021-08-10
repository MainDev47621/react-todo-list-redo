import React from 'react';
import { ACTIONS } from '../containers/MainContainer';

export function Todo({ todo, dispatch }) {
    return (
        <li>
            <span style={{color: todo.complete ? '#999': '#000'}}>{todo.name}</span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } }) }>Complete Todo</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } }) }>Delete Todo</button>
        </li>
    )
}