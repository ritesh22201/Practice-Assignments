import { Box, Button, Input } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { patchReq } from '../Redux/Products/action';

const EditPage = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [price, setPrice]  = useState(0);
    const {products} = useSelector(store => store.productReducer);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const data = products.find(el => el.id === +id);
        setPrice(data.price);
        setName(data.name)
    }, [])

    const handleUpdate = () => {
        let data = {
            price, 
            name
        }

        dispatch(patchReq(id, data)).then(res => {
            navigate(location.state, {replace : true});
        })
    }

    return (
        <Box w={'40%'} m={'auto'}> 
        <Box>
            <Input value={price} onChange={(e) => setPrice(e.target.value)} type='number'/>
        </Box>
        <Box>
            <Input value={name} onChange={(e) => setName(e.target.value)} type='text'/>
        </Box>
        <Button onClick={handleUpdate}>Update</Button>
        </Box>
    )
}

export default EditPage;