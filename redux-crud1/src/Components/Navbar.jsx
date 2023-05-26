import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components';

const Navbar = () => {
  return (
    <DIV>
        <h1>Product List</h1>
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/admin'}>Admin</Link>
    </DIV>
  )
}

export default Navbar;

const DIV = styled.div`
    display: flex;
    width: 35%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
`