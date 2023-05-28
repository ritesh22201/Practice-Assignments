import React from 'react'
import useTimer from '../hooks/useTimer'

const Timer2 = () => {

    const show = useTimer(5000);
    return (
        <div>
            {show && <h1>Timer Component 2</h1>}
        </div>
    )

}

export default Timer2