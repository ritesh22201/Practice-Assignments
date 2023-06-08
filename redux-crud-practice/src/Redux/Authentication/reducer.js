import { LOGIN_FAILURE, LOGIN_REQ, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading : false,
    isError : false,
    isAuth : false,
    token : ''
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case LOGIN_REQ : {
            return {
                ...state,
                isLoading : true
            }
        }

        case LOGIN_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isAuth : true,
                token : payload
            }
        }

        case LOGIN_FAILURE: {
            return {
                ...state,
                isLoading : false,
                isError : true,
                isAuth : false
            }
        }

        default : {
            return state;
        }
    }
}