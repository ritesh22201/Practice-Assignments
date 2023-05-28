import React, { useEffect, useState } from 'react'
import useTimer from '../hooks/useTimer'

const Timer = () => {
    const show = useTimer(3000);
    return (
        <div>
            {show && <h1>Timer Component 1</h1>}
        </div>
    )
}

export default Timer