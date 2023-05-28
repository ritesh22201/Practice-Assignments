import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleReduce = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Counter : {count}</h2>
            <button data-testid='add' className='button' onClick={handleAdd}>Add</button>
            <button className='button' onClick={handleReduce}>Reduce</button>
        </div>
    )
}

export default Counter