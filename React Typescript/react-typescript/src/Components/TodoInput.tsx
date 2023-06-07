import React, { useState } from 'react'
import { addTodo } from '../api';

const TodoInput = () => {
    const [title, setTitle] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo = {
            title,
            status : false
        }
        addTodo(newTodo);
        setTitle("");
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={title} onChange={(e) => handleChange(e)} placeholder='Add a todo' />
                <button>Add todo</button>
            </form>
        </div>
    )
}

export default TodoInput;