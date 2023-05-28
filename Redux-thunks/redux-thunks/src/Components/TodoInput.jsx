import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { postTodoReq, postTodos, todoRequest, todoRequestFailure } from '../Redux/action';
import axios from 'axios';

const TodoInput = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newObj = {
      title : title,
      status : false
    }
    
    dispatch(postTodos(newObj));
  }

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput;