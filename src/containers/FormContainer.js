import React, { useState } from 'react';
import { Form } from '../components/Form';

export function FormContainer({ addTodo }) {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
        console.log(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTodo(name);
        setName('');
    }

    return <Form name={name} handleChange={handleChange} handleSubmit={handleSubmit} />;
}