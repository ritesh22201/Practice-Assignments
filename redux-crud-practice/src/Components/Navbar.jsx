import { Button } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGIN_FAILURE } from '../Redux/Authentication/actionTypes';

const Navbar = () => {
    let { isAuth } = useSelector(store => store.authReducer);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({type : LOGIN_FAILURE});
    }

    return (
        <div style={{ width: '35%', margin: '20px auto', display: 'flex', justifyContent: 'space-between' }}>
            <Link to={'/'}>Home</Link>
            <Link to={'/admin'}>Admin</Link>
            {isAuth ? <Button onClick={handleLogout}>Logout</Button> : <Link to={'/login'}>Login</Link>}
        </div>
    )
}

export default Navbar;