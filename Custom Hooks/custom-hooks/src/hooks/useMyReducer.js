import React, { useState } from 'react'

const useMyReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatchFunc = (action) => {
    const newState = reducer(state, action);
    setState(newState);
  }
  
  return {state, dispatchFunc};
}

export default useMyReducer;