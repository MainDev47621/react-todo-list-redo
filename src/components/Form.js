import React, {useState} from 'react';

export function Form({name, handleChange, handleSubmit}) {

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} />
            <input type="submit" value="Add Todo" />
        </form>
    )
}