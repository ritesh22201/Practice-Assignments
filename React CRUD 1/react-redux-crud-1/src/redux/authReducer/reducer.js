import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../productReducer/actionTypes"

const initialState = {
    isAuth : false,
    token : '',
    isLoading : false,
    isError : false,
    errorMsg : ''
}
export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case LOGIN_REQUEST : {
            return {
                ...state,
                isLoading : true
            }
        }

        case LOGIN_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                errorMsg : payload
            }
        }

        case LOGIN_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isAuth : true,
                token : payload
            }
        }

        default : {
            return state;
        }
    }
}