import { POST_TODO_REQUEST, TODO_REQUEST, TODO_REQUEST_FAILURE, TODO_REQUEST_SUCCESS } from "./actionType";

const initialState = {
    isLoading : false,
    todos : [],
    isError : false
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case TODO_REQUEST : {
            return {...state, isLoading : true}
        }

        case TODO_REQUEST_SUCCESS : {
            return {...state, isLoading : false, todos : payload}
        }

        case TODO_REQUEST_FAILURE : {
            return {...state, isLoading : false, isError : true}
        }

        case POST_TODO_REQUEST : {
            return {...state, isLoading : false, todos : [...state.todos, payload]}
        }

        default : {
            return state;
        }
    }
}