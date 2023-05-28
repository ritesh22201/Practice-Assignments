import React, { useReducer } from 'react';
import useMyReducer from '../hooks/useMyReducer';

const initialState = {
    name : '',
    email : ''
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case 'Email' : {
            return {
                ...state,
                email : payload
            }
        }

        case 'Name' : {
            return {
                ...state,
                name : payload
            }
        }
        
        default : {
            return state;
        }
    }
}

const Form = () => {
    const {state, dispatchFunc : dispatch} = useMyReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={state.name} onChange={(e) => dispatch({type : 'Name', payload : e.target.value})} type="text" placeholder='Name' />
                <input value={state.email} onChange={(e) => dispatch({type : 'Email', payload : e.target.value})} type="text" placeholder='Email' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form