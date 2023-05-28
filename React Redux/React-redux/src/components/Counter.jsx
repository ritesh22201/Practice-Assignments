import React from 'react'
import { store } from '../redux/store'
import { addAction, reduceAction } from '../redux/action';

const Counter = () => {
    const {getState, dispatch} = store;
    console.log(getState());
    const handleAdd = () => {
        dispatch(addAction(1));
    }

    const handleReduce = () => {
        dispatch(reduceAction(1));
    }
  return (
    <div>
        <h1>Redux Intro</h1>
        <h1>Counter : {getState().counter}</h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
    </div>
  )
}

export default Counter