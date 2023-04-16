import { GET_USER_DATA, GET_USER_DATA_SUCCESSFUL, GET_USER_DATA_UNSUCCESSFUL } from "./actionType";

const initialState = {
    isAuth : false,
    token : '',
    isLoading : false,
    isError : false
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_USER_DATA : {
            return {
                ...state, 
                isLoading : true
            }
        }

        case GET_USER_DATA_SUCCESSFUL : {
            return {
                ...state,
                isAuth : true,
                token : payload,
                isLoading : false,
            }
        }

        case GET_USER_DATA_UNSUCCESSFUL : {
            return {
                ...state,
                isError : true,
                isLoading : false
            }
        }

        default : {
            return {
                ...state
            }
        }
    }
}