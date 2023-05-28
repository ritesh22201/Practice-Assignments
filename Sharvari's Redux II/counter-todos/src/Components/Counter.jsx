import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { handleDec, handleInc, resetHandler } from '../Redux/CounterReducer/action';
import { store } from '../Redux/store';

const Counter = () => {
  const dispatch = useDispatch();
  const {counter} = useSelector(store => store.counterReducer);

  const handleAdd = () => {
    dispatch(handleInc(1)); //dispatch({type : INCREMENT, payload : payload})
  }

  const handleReduce = () => {
    dispatch(handleDec(1));
  }

  const handleReset = () => {
    dispatch(resetHandler(0));
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleAdd}>INC</button>
      <button disabled={counter === 0} onClick={handleReduce}>DEC</button>
      <button disabled={counter === 0} onClick={handleReset}>RESET</button>
    </div>
  )
}

export default Counter