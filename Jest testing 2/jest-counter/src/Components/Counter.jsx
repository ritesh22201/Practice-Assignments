import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1 data-testid='counter'>Counter : {counter}</h1>
            <button data-testid='increment' onClick={() => setCounter(counter + 1)}>Add</button>
            <button data-testid='decrement' onClick={() => setCounter(counter - 1)}>Reduce</button>
        </div>
    )
}

export default Counter;