import {
    GET_REQUEST,
    GET_REQUEST_FAILURE,
    GET_REQUEST_SUCCESS
  } from "./actionType";
  
  export const getRequest = () => {
    return { type: GET_REQUEST };
  };
  
  export const getRequestSuccess = (payload) => {
    return { type: GET_REQUEST_SUCCESS, payload };
  };
  
  export const getRequestFailure = () => {
    return { type: GET_REQUEST_FAILURE };
  };
  