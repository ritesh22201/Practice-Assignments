import { POST_TODO_REQUEST, TODO_REQUEST, TODO_REQUEST_FAILURE, TODO_REQUEST_SUCCESS } from "./actionType"
import axios from 'axios';

export const todoRequest = () => {
    return {type : TODO_REQUEST}
}

export const todoRequestSuccess = (payload) => {
    return {type : TODO_REQUEST_SUCCESS, payload : payload}
}

export const todoRequestFailure = () => {
    return {type : TODO_REQUEST_FAILURE}
}

export const postTodoReq = (payload) => {
    return {type : POST_TODO_REQUEST, payload : payload}
}

export const renderTodos = (dispatch) => {
    dispatch(todoRequest());
    axios.get('http://localhost:8080/todos')
    .then(res => {
       dispatch(todoRequestSuccess(res.data));
    })
    .catch(err => {
        dispatch(todoRequestFailure())
    })
}

export const postTodos = (newObj) => (dispatch) => {
    dispatch(todoRequest());
    axios.post('http://localhost:8080/todos', newObj)
    .then(res => {
      dispatch(postTodoReq(res.data));
    })
    .catch(err => {
      dispatch(todoRequestFailure());
    })
  }