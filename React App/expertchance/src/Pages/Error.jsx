import React from 'react'
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <Wrapper>
            <img className='error-img' src="./images/error.svg" alt="error_img" />
            <NavLink to='/'>
                <Button className='btn'>Go Back</Button>
            </NavLink>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  padding: 6rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .error-img{
    width: 550px;
  }

  .btn{
    font-size: 1.6rem;
    margin-top: 3rem;
  }
`;

export default Error