import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({id, name, brand, price, image, category, gender}) => {
  return (
    <Box p={'20px'} boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px'>
        <Image w={'100%'} h={'350px'} src={image} alt='ProductImage' />
        <Heading size={'md'}>Name : {name}</Heading>
        <Heading size={'md'}>Brand : {brand}</Heading>
        <p>Price : {price}</p>
        <p>Category : {category}</p>
        <p>Gender : {gender}</p>
        <Link style={{textDecoration : 'underline'}} to={`/edit/${id}`}>Edit</Link>
    </Box>
  )
}

export default ProductCard;