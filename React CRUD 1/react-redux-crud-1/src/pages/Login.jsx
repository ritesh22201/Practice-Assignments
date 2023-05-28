import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/authReducer/action';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(store => store.authReducer.isAuth);
    const error = useSelector(store => store.authReducer.isError);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = () => {
        const userData = {
            email,
            password
        }

        dispatch(login(userData))
        .then(res => {
            navigate(location.state);
        })
    }

  return (
    <DIV>
        <h2>{auth ? 'Login Successful' : 'Login to Continue'}</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='User Email'/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='User Password'/>
        <button onClick={handleLogin}>Log In</button>
    </DIV>
  )
}

const DIV = styled.div`
  width: 400px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2{
    color : ${({auth}) => (auth ? 'green' : 'red' )}
  }

  input{
    height: 40px;
    border : ${({error}) => (error ? '1px solid red' : '1px solid gray')}
  }

  button{
    height: 30px;
  }
`

export default Login