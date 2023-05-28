import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getProducts } from '../redux/productReducer/action';

const ProductCard = ({id, name, price, brand, image, category, gender}) => {

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(getProducts())
  }

  return (
    <DIV>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <h3>Price : {price}</h3>
        <p>Brand : {brand}</p>
        <p>Category : {category}</p>
        <p>Gender : {gender}</p>
        <button onClick={() => handleDelete(id)}>Delete</button>
        <button>Edit</button>
    </DIV>
  )
}

const DIV = styled.div`
border: 1px solid black;
padding: 10px;
 img{
    width: 80%;
    height: 300px;
 }
`

export default ProductCard