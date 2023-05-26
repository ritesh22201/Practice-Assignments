import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const ProductCard = ({id, image, name, brand, price, gender, category}) => {
  return (
    <DIV>
        <img src={image} alt="product-img" />
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <h3>Brand: {brand}</h3>
        <p>Category: {category}</p>
        <p>Gender: {gender}</p>
        <Link to={`/edit/${id}`}>Edit</Link>
    </DIV>
  )
}

export default ProductCard;

const DIV = styled.div`
    border: 1px solid gray;
    img{
        width: 100%;
    }
`