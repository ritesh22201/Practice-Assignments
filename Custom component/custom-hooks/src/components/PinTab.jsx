import React, { useRef, useState } from 'react'
import '../App.css'
import PropTypes from 'prop-types';
import Pin from './Pin';

const PinTab = ({ length, maxChar }) => {
    const [pinTab] = useState(new Array(length).fill(0));
    const inputRef = useRef([]);

    const handleFocus = (e, index) => {
        if(e.target.value.length === maxChar && index < length - 1){
            inputRef.current[index + 1].focus()
        }
    }

    const backSpaceHandler = (e, index) => {
        if(e.target.value.length === 0 && index > 0){
            inputRef.current[index - 1].focus()
        }
    }

    const keyHandler = (e, index) => {
        if(e.keyCode === 8){
            backSpaceHandler(e, index);
        }
        else{
            handleFocus(e, index);
        }
    }

    const pasteHandler = (e) => {
        const data = e.clipboardData.getData("Text").split('').filter((_, index) => index < length);
        data.forEach((el, index) => {
            inputRef.current[index].value = el;
            if(e.target.value.length === maxChar && index < data.length - 1){
                inputRef.current[index + 1].focus();
            }
        })
    }

    return (
        <div onPaste={pasteHandler}>
            {pinTab.map((el, i) => {
                return <Pin key={i} maxChar={maxChar} keyHandler = {(e) => keyHandler(e, i)} ref={(e) => inputRef.current[i] = e}/>
            })}
        </div>
    )
}

PinTab.propTypes = {
    length : PropTypes.number.isRequired,
    maxChar : PropTypes.number
}

export default PinTab