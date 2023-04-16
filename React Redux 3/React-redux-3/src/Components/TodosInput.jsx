// import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {getRequest, getRequestFailure, getRequestSuccess } from '../redux/Todos/action';

const TodoInput = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const postTodo = () => {
        const task = {
            title: title,
            status: false
        }
        
        dispatch(getRequest());
        axios.post(`http://localhost:3000/todos`, task)
        .then(res => {
            // console.log(res.data)
            dispatch(getRequestSuccess(res.data));
        })
        .catch(err => {
            dispatch(getRequestFailure(err.message));
        })
    }

    const addTodo = () => {
        postTodo();
        setTitle("");
    }

    return (
        <div>
            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Add a todo' />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default TodoInput