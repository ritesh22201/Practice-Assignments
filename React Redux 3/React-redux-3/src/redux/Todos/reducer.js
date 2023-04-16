import {
    GET_REQUEST,
    GET_REQUEST_FAILURE,
    GET_REQUEST_SUCCESS
  } from "./actionType";
  
  const initialState = {
    todos: [],
    isLoading: false,
    isError: false
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_REQUEST: {
        return {
          ...state,
          isLoading: true
        };
      }
  
      case GET_REQUEST_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          todos: payload
        };
      }
  
      case GET_REQUEST_FAILURE: {
        return {
          ...state,
          isError: true,
          isLoading: false
        };
      }
      default: {
        return { ...state };
      }
    }
  };