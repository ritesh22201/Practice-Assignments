import { GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS, POST_DATA_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    todos: [],
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        
        case GET_DATA : {
            return {
                ...state,
                isLoading : true
            }
        }

        case GET_DATA_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                todos : payload
            }
        }

        case GET_DATA_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        case POST_DATA_SUCCESS : {
            return {
                ...state, 
                isLoading : false,
                todos : [...state.todos, payload]
            }
        }

        default: {
            return state;
        }
    }
}