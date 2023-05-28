import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction, reduceAction } from '../redux/actionType';

const Counter = () => {
    const data = useSelector(store => store.counter);
    const dispatch = useDispatch();
    
    const handleAdd = () => {
        dispatch(addAction(1));
    }

    const handleReduce = () => {
        dispatch(reduceAction(1));
    }

  return (
    <div>
        <h1>Counter : {data}</h1>
        <button onClick={handleAdd}>Add</button>
        <button disabled={data == 0} onClick={handleReduce}>Reduce</button>
    </div>
  )
}

export default Counter