import { LOGIN_REQUEST, LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading : false,
    isError : false, 
    isAuth : false,
    token : ''
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case LOGIN_REQUEST : {
            return {
                ...state,
                isLoading: true
            }
        }

        case LOGIN_REQUEST_SUCCESS : {
            return {
                ...state,
                isLoading :false,
                isError : false,
                isAuth : true,
                token : payload
            }
        }

        case LOGIN_REQUEST_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        default : {
            return state;
        }
    }
}