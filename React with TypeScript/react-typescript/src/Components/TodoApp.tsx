import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import { getTodo } from '../api'
import { Todo } from '../constant';
import TodoItem from './TodoItem';

const TodoApp = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [update, setUpdate] = useState<boolean>(false);

    const handleUpdate = () => {
        setUpdate((prev: boolean) => !prev);
    }

    useEffect(() => {
        getTodo().then((res: Todo[]) => {
            setTodos(res);
        })
    }, [update])

  return (
    <div>
        <TodoInput/>
        {todos.map((el) => {
            return <TodoItem key={el.id} {...el}  handleUpdate = {handleUpdate}/>  
        })}
    </div>
  )
}

export default TodoApp