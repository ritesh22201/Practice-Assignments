import { GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS, POST_DATA_SUCCESS, TOGGLE_TODOS } from "./actionTypes"
import axios from 'axios';

const baseUrl = `http://localhost:8080/todos`;

export const getData = () => {
    return {type : GET_DATA}
}

export const getDataSuccess = (payload) => {
    return {type : GET_DATA_SUCCESS, payload : payload}
}

export const getDataError = () => {
    return {type : GET_DATA_FAILURE}
}

export const postDataSuccess = (payload) => {
    return {type : POST_DATA_SUCCESS, payload}
}

export const getTodos = () => (dispatch) => {
    dispatch(getData());
    axios.get(`${baseUrl}`)
    .then(res => {
        dispatch(getDataSuccess(res.data));
    })
    .catch(err => {
        dispatch(getDataError());
    })
}

export const postTodos = (newObj) => (dispatch) => {
    dispatch(getData());
    axios.post(`${baseUrl}`, newObj)
    .then(res => {
        dispatch(postDataSuccess(res.data));
    })
    .catch(err => {
        dispatch(getDataError());
    })
}

export const updateTodos = (id, payload) => async(dispatch) => {
    try {
        await axios.put(`${baseUrl}/${id}`, payload)
    } catch (error) {
        
    }
}

export const toggleTodos = (id, status) => async(dispatch) => {
   return await axios.patch(`${baseUrl}/${id}`, {status : !status});
}

export const deleteTodos = (id) => async(dispatch) => {
    return await axios.delete(`${baseUrl}/${id}`);
}