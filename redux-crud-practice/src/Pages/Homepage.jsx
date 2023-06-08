import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import Sidebar from '../Components/Sidebar';
import ProductList from '../Components/ProductList';

const Homepage = () => {
    return (
        <Box>
            <Flex gap={'15px'}>
                <Box w={'20%'}>
                    <Sidebar />
                </Box>
                <Box w={'80%'}>
                    <ProductList />
                </Box>
            </Flex>
        </Box>
    )
}

export default Homepage;