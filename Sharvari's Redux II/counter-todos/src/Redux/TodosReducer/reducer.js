import { DELETE_TODOS, TOGGLE_TODOS } from "../TodosReducer/actionType"
import { GET_TODOS_FAILURE, GET_TODOS_LOADING, GET_TODOS_SUCCESS, POST_TODOS_SUCCESS, RESET_TODOS } from "./actionType"

const initialState = {
    isLoading : false,
    todos : [],
    isError : false
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_TODOS_LOADING : {
            return {
                ...state,
                isLoading : true
            }
        }

        case GET_TODOS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                todos : payload
            }
        }

        case GET_TODOS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        case POST_TODOS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                todos : [...state.todos, payload]
            }
        }
        
        case DELETE_TODOS : {
            return {
                ...state,
            }
        }

        case TOGGLE_TODOS : {
            return {
                ...state,
                todos : [...state.todos, payload]
            }
        }

        case RESET_TODOS : {
            return {
                ...initialState
            };
        }

        default : {
            return state;
        }
    }
}