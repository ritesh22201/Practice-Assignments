import { LOGIN_FAILURE, LOGIN_REQ, LOGIN_SUCCESS } from "./actionTypes";
import axios from 'axios';

export const loginReq = (newUser) => (dispatch) => {
    dispatch({type : LOGIN_REQ});
   return axios.post('https://reqres.in/api/login', newUser)
    .then(res => {
        dispatch({type : LOGIN_SUCCESS, payload : res.data.token})
    })
    .catch(err => {
        dispatch({type : LOGIN_FAILURE})
    })
}