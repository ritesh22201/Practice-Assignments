import React from 'react'
import { Todo } from '../constant';
import { toggleTodo } from '../api';

interface TodoItemProps extends Todo {
    handleUpdate: () => void
}

const TodoItem = ({ id, title, status, handleUpdate }: TodoItemProps) => {
    
    const handleToggle = (status: boolean, id?: number) => {
        toggleTodo(status, id).then((res) => {
            // console.log(res)
            handleUpdate();
        })
    }

    return (
        <div>
            <h3>{title} -- {status ? 'Completed' : 'Not Completed'}</h3>
            <button onClick={() => handleToggle(status, id)}>toggle</button>
        </div>
    )
}

export default TodoItem;