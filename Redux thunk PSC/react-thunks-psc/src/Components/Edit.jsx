import { Box, Input } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getTodos, updateTodos } from '../Redux/action';

const Edit = ({ data, setHide }) => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const inputRef = useRef();

    useEffect(() => {
        setTitle(data.title);
        inputRef.current.focus();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            ...data,
            title
        }

        dispatch(updateTodos(data.id, payload))
        .then(() => dispatch(getTodos()))
        .then(() => setHide(prev => !prev));
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input ref={inputRef} type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        </form>
    )
}

export default Edit