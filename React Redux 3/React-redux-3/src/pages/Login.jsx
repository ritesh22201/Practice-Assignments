import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getUserData, getUserDataSuccessful, getUserDataUnsuccessful } from '../redux/Authentication/action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        let userData = {
            email,
            password
        }
        dispatch(getUserData());
        axios.post('https://reqres.in/api/login', userData)
            .then(res => {
                console.log(res.data);
                dispatch(getUserDataSuccessful(res.data.token));
                navigate('/counter');
            })
            .catch(err => {
                console.log(err.message);
                dispatch(getUserDataUnsuccessful());
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login