import { Box, Button, Input, Select } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProducts } from '../Redux/Products/action';

const initialState = {
    image : '',
    price : '',
    name : '',
    brand : '',
    category : '',
    gender : ''
}

const Admin = () => {
    const [data, setData] = useState(initialState);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({...data, [name] : name === 'price' ? +value : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postProducts(data));
    }

    return (
        <Box style={{ width: '35%', margin: '30px auto', lineHeight: '50px' }}>
            <form onSubmit={handleSubmit}>
                <Input name='image' value={data.image} onChange={(e) => handleChange(e)} type='text' placeholder='Image' />
                <Input name='price' value={data.price} onChange={(e) => handleChange(e)} type='number' placeholder='Price' />
                <Input name='name' value={data.name} onChange={(e) => handleChange(e)} type='text' placeholder='Name' />
                <Input name='brand' value={data.brand} onChange={(e) => handleChange(e)} type='text' placeholder='Brand' />
                <Select value={data.category} onChange={(e) => handleChange(e)} name='category'>
                    <option value="">Select Category</option>
                    <option value="top-wear">Top Wear</option>
                    <option value="bottom-wear">Bottom Wear</option>
                    <option value="foot-wear">Foot Wear</option>
                </Select>
                <Select value={data.gender} onChange={(e) => handleChange(e)} name='gender'>
                    <option value="">Select Gender</option>
                    <option value="male">Men</option>
                    <option value="female">Women</option>
                    <option value="kids">Kids</option>
                </Select>
                <Button type='submit'>Submit</Button>
            </form>
        </Box>
    )
}

export default Admin;