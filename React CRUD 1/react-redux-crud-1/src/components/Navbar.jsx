import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1>Products List</h1>
            <div style={{display : 'flex', width : '28%', margin : '20px auto', justifyContent : 'space-around'}}>
                <Link style={{textDecoration : 'none'}} to={'/'}>Home </Link>
                <Link style={{textDecoration : 'none'}} to={'/admin'}>Admin Page </Link>
                <Link style={{textDecoration : 'none'}} to={'/login'}>LogIn Page </Link>
                <Link style={{textDecoration : 'none'}} to={'/editpage'}>Edit Page </Link>
            </div>
        </div>
    )
}

export default Navbar