import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import { getTodos } from '../api';
import { Todo } from '../constants';
import TodoItem from './TodoItem';

const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getTodos().then(res => {
            setTodos(res);
        })
    }, [])
  return (
    <div>
        <TodoInput/>
        {todos.map(el => {
            return <TodoItem key={el.id} {...el}/>
        })}
    </div>
  )
}

export default TodoApp;