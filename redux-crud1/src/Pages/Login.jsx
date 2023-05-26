import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {styled} from 'styled-components';
import { login } from '../Redux/Authentication/action';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {isAuth, isError} = useSelector(store => store.authReducer);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuth){
            navigate(location.state, {replace : true});
        }
    }, [isAuth]);

    const handleLogin = () => {
        const userData = {
            email,
            password
        }
        dispatch(login(userData));
    }

    return (
        <DIV isAuth = {`${isAuth}`} isError = {`${isError}`}>
            <h1>{isAuth ? 'Login Successful!!' : 'Login to Continue'}</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <button onClick={handleLogin}>Login</button>
        </DIV>
    )
}

export default Login;

const DIV = styled.div`
width: 400px;
margin: 40px auto;
display: flex;
flex-direction: column;
gap: 15px;

    h1{
        color: ${({isAuth}) => (isAuth === 'true' ? 'green' : 'red')};
    }

    input{
        height: 40px;
        border: ${({isError}) => (isError === 'true' ? '1px solid red' : 'gray')};
    }

    button{
        height: 35px;
    }
`