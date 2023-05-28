import React, { useState } from 'react'
import Todos from './Todos';

const initialState = [
    {id : 1, title : Task-1, status : false},
    {id : 2, title : Task-2, status : false},
    {id : 3, title : Task-3, status : false},
]

const TodoInput = () => {
    const [todos, setTodos] = useState(initialState);
    const [title, setTitle] = useState('');

    const handleAdd = () => {
        const newTodo = {
            id : todos.length,
            title,
            status : false,
        }

        setTodos(prev => [...prev, newTodo]);
    }

  return (
    <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Add a todo' />
        <button>Add</button>
        <h3>Todo List</h3>
        {todos.map(el => {
            return <Todos {...el} />
        })}
    </div>
  )
}

export default TodoInput;