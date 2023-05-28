import React, { useEffect, useRef } from 'react'
import useDebounce from '../hooks/useDebounce';

const ClickMe = () => {
    const debounce = useDebounce();
    const makeRequest = () => {
        console.log('Making network request');
    }
    
    let {current : wait} = useRef(false);

    const throttle = (fun, delay) => {
        if(wait) return ;
        fun();
        wait = true;

        setTimeout(() => {
            fun();
        }, delay)
    }

    return (
        <div>
            <h1>Click Me</h1>
            <button onClick={() => throttle(makeRequest, 2000)}>Click</button>
        </div>
    )
}

export default ClickMe