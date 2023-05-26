import axios from "axios"
import { PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCTS_FAILURE, PRODUCTS_REQ, PRODUCTS_SUCCESS } from "./actionTypes"


export const getProducts = (obj) => (dispatch) => {
    dispatch({type : PRODUCTS_REQ})
    axios.get('http://localhost:8080/products', obj)
    .then(res => {
        dispatch({type : PRODUCTS_SUCCESS, payload : res.data});
    })
    .catch(err => {
        dispatch({type : PRODUCTS_FAILURE});
    })
}

export const postProduct = (newProduct) => (dispatch) => {
    dispatch({type : PRODUCTS_REQ})
    axios.post('http://localhost:8080/products', newProduct)
    .then(res => {
        console.log(res.data)
        dispatch({type : POST_PRODUCT_SUCCESS, payload : res.data})
    })
    .catch(err => {
        dispatch({type : PRODUCTS_FAILURE})
    })
}

export const editPrice = (id,data) => (dispatch) => {
    dispatch({type : PRODUCTS_REQ});
    axios.patch(`http://localhost:8080/products/${id}`, data)
    .then(res => {
        dispatch({type : PATCH_PRODUCT_SUCCESS})
    })
    .catch(err => {
        dispatch({type : PRODUCTS_FAILURE})
    })
}