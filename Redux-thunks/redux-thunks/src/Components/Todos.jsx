import React from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { renderTodos, todoRequest, todoRequestFailure, todoRequestSuccess } from '../Redux/action';
import { useEffect } from 'react';
import TodoInput from './TodoInput';

const Todos = () => {
    const dispatch = useDispatch();
    const {todos} = useSelector(store => store.todosReducer);

    useEffect(() => {
       dispatch(renderTodos);
    }, [])

    return (
        <div>
            <TodoInput/>
            {todos.map(el => {
                return <h3>{el.title} -- {el.status ? 'Completed' : 'Not Completed'}</h3>
            })}
        </div>
    )
}

export default Todos