import { ADD, GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS, POST_TODOS_SUCCESS, REDUCE } from "./action";

export const reducer = (state, {type, payload}) => {
   switch(type){

    case ADD : {
        return {
            ...state, 
            counter : state.counter + payload
        }
    }

    case REDUCE : {
        return {
            ...state,
            counter : state.counter - payload
        }
    }

    case GET_REQUEST : {
        return {
            ...state,
            isLoading : true
        }
    }

    case GET_REQUEST_SUCCESS : {
        return {
            ...state, 
            isLoading : false,
            todos : payload
        }
    }

    case POST_TODOS_SUCCESS : {
        return {
            ...state,
            isLoading : false,
            todos : [...state.todos, payload]
        }
    }

    case GET_REQUEST_FAILURE : {
        return {
            ...state,
            isError : true,
            isLoading : false
        }
    }

    default : {
        return {...state};
    }
   }
}