import React, { forwardRef } from 'react'

const Pin = forwardRef(({ maxChar, keyHandler }, ref) => {
    return (
        <input placeholder='◯' type="text" maxLength={maxChar} ref={ref} onKeyUp={(e) => keyHandler(e)} />
    )
});

export default Pin;