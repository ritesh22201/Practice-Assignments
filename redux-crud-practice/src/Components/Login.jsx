import React from 'react'
import { Box, Button, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginReq } from '../Redux/Authentication/action';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {isAuth, token} = useSelector(store => store.authReducer);
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            email,
            password
        }
        
        dispatch(loginReq(newUser)).then(res => {
            navigate(location.state, {replace : true})
        })
    }

    return (
        <Box>
            <Heading color={isAuth ? 'green' : 'gray'}>{isAuth ? 'Login Successful' : 'Login to Continue'}</Heading>
            <form onSubmit={handleSubmit} style={{ width: '35%', margin: '30px auto', lineHeight: '50px' }}>
                <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                <Button type='submit'>Login</Button>
            </form>
        </Box>
    )
}

export default Login;