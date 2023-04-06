import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
    return (
        <header>
            <MainHeader>
                <NavLink to='/'>
                    <img src="https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12ec2e784a6708ebf43fe_WavelessDefault.svg" alt="logo" className='logo'/>
                </NavLink>
                <Navbar />
            </MainHeader>
        </header>
    )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo{
    height: auto;
    max-width: 30%; 
  }
`;

export default Header