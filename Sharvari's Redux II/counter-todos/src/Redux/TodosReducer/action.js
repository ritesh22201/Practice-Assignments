import { GET_TODOS_FAILURE, GET_TODOS_LOADING, GET_TODOS_SUCCESS, POST_TODOS_SUCCESS, RESET_TODOS, TOGGLE_TODOS } from "./actionType"


export const getTodosData = (payload) => {
    return {type : GET_TODOS_SUCCESS, payload : payload}
}

export const getError = () => {
    return {type : GET_TODOS_FAILURE}
}

export const getLoading = () => {
    return {type : GET_TODOS_LOADING}
}

export const postHandler = (payload) => {
    return {type : POST_TODOS_SUCCESS, payload : payload}
}

export const handleReset = () => {
    return {type : RESET_TODOS}
}

export const todosToggle = (payload) => {
    return {type : TOGGLE_TODOS, payload : payload}
}

