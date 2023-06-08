import { POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading : false,
    isError : false,
    products : []
}

export const reducer = (state = initialState, {type , payload}) => {
    switch(type){

        case PRODUCT_REQ : {
            return {
                ...state,
                isLoading : true
            }
        }

        case PRODUCT_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                products : payload,
                isError : false
            }
        }

        case PRODUCT_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        case POST_PRODUCT_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                products : [...state.products, payload],
                isError : false
            }
        }

        default : {
            return state;
        }
    }
}