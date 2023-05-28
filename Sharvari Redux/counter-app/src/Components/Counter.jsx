import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter, reduceCounter } from '../redux/action';
import { store } from '../redux/store';

const Counter = () => {
  const count = useSelector(store => store.counterReducer.counter);
//   const {counterReducer} = store.getState();
//   console.log(counterReducer.counter)
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addCounter(1));
  }

  const handleReduce = () => {
    dispatch(reduceCounter(1));
  }

  return (
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={handleAdd}>Increment</button>
        <button onClick={handleReduce}>Decrement</button>
    </div>
  )
}

export default Counter