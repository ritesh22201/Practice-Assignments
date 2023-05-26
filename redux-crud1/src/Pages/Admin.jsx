import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { postProduct } from '../Redux/Products/action';

const initialState = {
  image : '' ,
  price : '', 
  brand : '',
  name : '',
  category : '',
  gender : ''

}

const Admin = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {value, name} = e.target;
    setProduct(prev => {
      return {...prev, [name] : name === 'price' ? +value : value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProduct(product));
  }

  return (
    <DIV>
      <h1>Add Products</h1>
      <form onSubmit={handleSubmit}>
        <input name='image' onChange={(e) => handleChange(e)} value={product.image} type="text" placeholder='Image' />
        <input name='price' onChange={(e) => handleChange(e)} value={product.price} type="number" placeholder='Price' />
        <input name='brand' onChange={(e) => handleChange(e)} value={product.brand} type="text" placeholder='Brand' />
        <input name='name' onChange={(e) => handleChange(e)} value={product.name} type="text" placeholder='Name' />
        <select onChange={(e) => handleChange(e)} value={product.category} name='category'>
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="foot-wear">Shoes</option>
        </select>
        <select onChange={(e) => handleChange(e)} value={product.gender} name='gender'>
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

export default Admin;

const DIV = styled.div`
  width: 500px;
  margin: auto;
  border: 1px solid gray;
  padding: 20px;

  form{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  input{
    height: 40px;
    font-size: larger;
    width: 90%;
  }

  select{
    height: 40px;
    font-size: larger;
    width: 90%;
  }

  button{
    width: 50%;
    height: 35px;
    cursor: pointer;
    border: none;
  }
`