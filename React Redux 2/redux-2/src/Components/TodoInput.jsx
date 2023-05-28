import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getRequest, getRequestFailure, postTodosSuccess } from '../redux/actionType';

const TodoInput = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const postTodos = () => {
    const newTodos = {
      title: title,
      status: false
    }
    dispatch(getRequest());
    axios.post('http://localhost:3000/todos', newTodos)
      .then(res => {
        dispatch(postTodosSuccess(res.data));

      })
      .catch(err => {
        dispatch(getRequestFailure(err.message));
      });
  }

  const handleAdd = () => {
    postTodos();
  }

  return (
    <div>
      <input type="text" placeholder='Add a todo' onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput;