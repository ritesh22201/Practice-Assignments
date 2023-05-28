import axios from 'axios';
import { GET_PRODUCT_DELETE, GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from './actionTypes';

export const addProduct = (newProduct) => (dispatch) => {
    dispatch({type : PRODUCT_REQUEST})
    axios.post('  http://localhost:8080/products', newProduct)
    .then(res => {
        console.log(res.data);
        dispatch({type : POST_PRODUCT_SUCCESS});
    })
    .catch(err => {
        console.log(err.message);
        dispatch({type : PRODUCT_FAILURE});
    })
}

export const getProducts = (paramObj) => (dispatch) => {
    dispatch({type : PRODUCT_REQUEST})
    axios.get('http://localhost:8080/products', paramObj)
    .then(res => {
        console.log(res.data);
        dispatch({type : GET_PRODUCT_SUCCESS, payload : res.data});
    })
}

export const handleDelete = (id) => (dispatch) => {
    dispatch({type : PRODUCT_REQUEST});
    
    return axios.delete(`http://localhost:8080/products/${id}`)
    .then(res => {
        console.log(res);
        dispatch({type : GET_PRODUCT_DELETE});
    })
    .catch(err => {
        console.log(err);
        dispatch({type : PRODUCT_FAILURE})
    })
}