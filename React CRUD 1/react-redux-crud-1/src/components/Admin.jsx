import React from 'react';
import {useDispatch} from 'react-redux';
import { useState } from 'react';
import styled from 'styled-components';
import { addProduct } from '../redux/productReducer/action';

const initialState = {
  name: '',
  image: '',
  brand: '',
  price: '',
  category: '',
  gender: ''
}

const Admin = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const {name, value} = e.target;
    setProduct((prev) => {
      return {...prev, [name] : name === 'price' ? +value : value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product))
    setProduct(initialState);
  }

  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => handleChange(e)} value={product.name} name='name' placeholder='Product Name' />
        <input type="text" onChange={(e) => handleChange(e)} value={product.image} name='image' placeholder='Product Image' />
        <input type="text" onChange={(e) => handleChange(e)} value={product.brand} name='brand' placeholder='Product Brand' />
        <input type="text" onChange={(e) => handleChange(e)} value={product.price} name='price' placeholder='Product Price' />

        <select onChange={(e) => handleChange(e)} value={product.category} name='category' className='category-list'>
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="shoes">Shoes</option>
        </select>

        <select onChange={(e) => handleChange(e)} value={product.gender} name='gender' className='gender-list'>
          <option value="">Select Gender</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
          <option value="kids">Kids</option>
        </select>
        <button type='submit'>Add Product</button>
      </form>
    </DIV>
  )
}

const DIV = styled.div`
  width: 400px;
  margin:30px auto;
  border: 1px solid gray;
  padding: 40px;

   form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
   }

   input{
    height: 40px;
    font-size: larger;
    width: 100%;
   }

   select {
    height: 40px;
    font-size: larger;
    width: 100%;
   }

   button{
    width: 50%;
    height: 35px;
    cursor: pointer;
    border: none;
   }
`

export default Admin