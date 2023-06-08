import { Box } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { useEffect } from 'react';
import { getProducts } from '../Redux/Products/action';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {
    const {products}  = useSelector(store => store.productReducer);
    const dispatch = useDispatch();
    const [searchParams]= useSearchParams();

    const obj = {
        params : {
            category : searchParams.getAll('category'),
            gender : searchParams.getAll('gender'),
            _sort : searchParams.get('order') && 'price',
            _order : searchParams.get('order')
        }
    }

    useEffect(() => {
        dispatch(getProducts(obj));
    }, [searchParams])

    return (
        <Box display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} gap={'15px'}>
            {products.map(el => {
                return <ProductCard key={el.id} {...el} />
            })}
        </Box>
    )
}

export default ProductList;