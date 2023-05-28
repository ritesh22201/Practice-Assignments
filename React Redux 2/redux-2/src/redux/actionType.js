import { ADD, GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS, POST_TODOS_SUCCESS, REDUCE } from "./action"

export const addAction = (payload) => {
    return {type : ADD, payload}
}

export const reduceAction = (payload) => {
    return {type : REDUCE, payload}
}

// Todos

export const getRequest = () => {
    return {type : GET_REQUEST}
}

export const getRequestSuccess = (payload) => {
    return {type : GET_REQUEST_SUCCESS, payload}
}

export const getRequestFailure = () => {
    return {type : GET_REQUEST_FAILURE}
}

// Post Request

export const postTodosSuccess = (payload) => {
    return {type : POST_TODOS_SUCCESS, payload}
}