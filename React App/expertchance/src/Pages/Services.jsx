import React from 'react'
import { AppContext } from '../Context';
import { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';

export default function Services() {
    const { products } = useContext(AppContext);

    return (
        <Wrapper className='section'>
            <h2 className='common-heading'>Our Products</h2>
            <div className='container grid grid-three-column'>
                {
                    products.map((ele) => {
                        const { id, title, image, price } = ele;
                        return (
                            <div key={id} className='card'>
                                <figure>
                                    <img src={image} alt={title} />
                                </figure>
                                <div className='card-data'>
                                    <h3>{title}</h3>
                                    <p>Price : {price}</p>
                                    <NavLink to='/services'>
                                        <Button>Read More</Button>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`

 padding: 9rem 0;
 background-color: ${({ theme }) => theme.colors.bg};

 .container{
    max-width: 120rem;
 }

 .card{
    border: 0.1rem solid rgb(170 170 170/40%);
    padding: 15px
 }

 .card-data *{
    margin-top: 15px;
 }

 figure{
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.2s linear;
        cursor: pointer;
    }

    &:hover::after{
        width: 100%;
    }

    &:hover img{
        transform: scale(1.2);
    }

    img{
        max-width: 90%;
        margin-top: 1.5rem;
        height: 20rem;
        transition: all 0.2s linear;
    }

    @media (max-width: ${({ theme }) => theme.media.tab}) {
        .grid-three-column {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid-two-column,
        .grid-three-column {
          grid-template-columns: 1fr;
        }
      }
 }
`;
