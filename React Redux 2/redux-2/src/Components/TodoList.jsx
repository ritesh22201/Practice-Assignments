import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getRequest, getRequestSuccess, getRequestFailure } from '../redux/actionType';
import axios from 'axios';
import TodoInput from './TodoInput';

const TodoList = () => {
   const {todos, isLoading} = useSelector(store => {
      return {
        todos : store.todos,
        isLoading : store.isLoading
      }
   }, shallowEqual);
   console.log(todos)
    
   const dispatch = useDispatch();

   const getTodos = () => {
    dispatch(getRequest());
    axios.get('http://localhost:3000/todos')
    .then(res => {
      // console.log(res.data);
      dispatch(getRequestSuccess(res.data));
    })
    .catch(err => {
      dispatch(getRequestFailure(err.message));
    });
   }

   useEffect(() => {
    getTodos();
   }, [])

  return (
    <div>
      <TodoInput/>

      <div>
        {isLoading && <h1>Loading...</h1>}
        {todos.length > 0 && todos.map(el => {
          return <div key={el.id} style={{width: '20%', margin : 'auto', display : 'flex', justifyContent: 'space-between'}}>
            <h3>{el.title}</h3>
            <h3>{el.status ? 'Completed' : 'Not Completed'}</h3>
          </div>
        })}
      </div>

    </div>
  )
}

export default TodoList