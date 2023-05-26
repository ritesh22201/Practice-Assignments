import { PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCTS_FAILURE, PRODUCTS_REQ, PRODUCTS_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading : false,
    isError : false, 
    products : []
}
export const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case PRODUCTS_REQ : {
            return {
                ...state,
                isLoading : true
            }
        }

        case PRODUCTS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                products : payload
            }
        }

        case PATCH_PRODUCT_SUCCESS : {
            return {
                ...state,
                isLoading : false
            }
        }

        case PRODUCTS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        case POST_PRODUCT_SUCCESS: {
            return {
                ...state,
                isLoading : false,
                products : [...state.products, payload]
            }
        }

        default : {
            return state;
        }
    }
}