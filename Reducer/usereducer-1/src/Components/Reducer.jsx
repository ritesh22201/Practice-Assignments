import { useReducer, useState } from "react";
import { useRef } from "react";
import '../style.css';

const initState = {
    amount : 0,
}

let reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT_AMOUNT' : {
            return {amount:state.amount + action.payload}
        }

        case 'DECREMENT_AMOUNT' : {
            return {amount:state.amount - action.payload}
        }

        default : {
            throw new Error(`Invalid Action Type`);
        }
    }
}

function Reducer(){
 
    const [state, dispatch] = useReducer(reducer, initState);
    const incRef = useRef();
    const decRef = useRef();

    let {amount} = state;

    let handleInc = () => {
        dispatch({type : 'INCREMENT_AMOUNT',payload: +incRef.current.value});
        incRef.current.value = '';
    }

    let handleDec = () => {
        dispatch({type : 'DECREMENT_AMOUNT',payload: +decRef.current.value});
        decRef.current.value = '';
    }
    
    return (
        <div>
            <h1>Amount : {amount}</h1>
            <input className="input" type="number" ref={incRef} placeholder="Increment Amount" />
            <button className="btn inc" onClick={handleInc}>INCREMENT</button>
            <br />
            <br />
            <input className="input" type="number" ref={decRef} placeholder="Decrement Amount" />
            <button className="btn dec" onClick={handleDec}>DECREMENT</button>
        </div>
    )
}

export default Reducer;