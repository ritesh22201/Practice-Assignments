import axios from "axios";
import { PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionTypes"


export const getProducts = (obj) => (dispatch) => {
    dispatch({type : PRODUCT_REQ});
    axios.get('http://localhost:8080/products', obj)
    .then(res => {
        dispatch({type : PRODUCT_SUCCESS, payload : res.data})
    })
    .catch(err => {
        dispatch({type : PRODUCT_FAILURE})
    })
}

export const postProducts = (data) => (dispatch) => {
    dispatch({type : PRODUCT_REQ});
    axios.post('http://localhost:8080/products', data)
    .then(res => {
        dispatch({type : POST_PRODUCT_SUCCESS, payload : res.data})
    })
    .catch(err => {
        dispatch({type : PRODUCT_FAILURE})
    })
}

export const patchReq = (id, data) => (dispatch) => {
    dispatch({type : PRODUCT_REQ});
    return axios.patch(`http://localhost:8080/products/${id}`, data)
    .then(res => {
        dispatch({type : PATCH_PRODUCT_SUCCESS});
    })
    .catch(err => {
        dispatch({type : PRODUCT_FAILURE})
    })
}