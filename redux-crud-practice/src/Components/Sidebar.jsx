import { Box, Heading, Input, Flex, Checkbox, Radio } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.getAll('category');
    const initialGender = searchParams.getAll('gender');
    const initialOrder = searchParams.get('order');
    const [category, setCategory] = useState(initialCategory || []);
    const [gender, setGender] = useState(initialGender || []);
    const [order, setOrder] = useState(initialOrder || '');

    useEffect(() => {
        let paramObj = {
            category, 
            gender
        }
        order && (paramObj.order = order);
        setSearchParams(paramObj);

    }, [category, gender, order])

    const handleChange = (e) => {
        const { value } = e.target;
        let newCategory = [...category];
        if(newCategory.includes(value)){
            newCategory = newCategory.filter(el => el !== value);
        }
        else{
            newCategory.push(value);
        }

        setCategory(newCategory);
    }

    const handleGender = (e) => {
        const {value} = e.target;
        let newGender = [...gender];
        if(newGender.includes(value)){
            newGender = newGender.filter(el => el !== value);
        }
        else{
            newGender.push(value)
        }
        setGender(newGender);
    }

    return (
        <Box pl={'15px'}>
            <Heading mb={'10px'} size={'md'}>Filter By Category</Heading>
            <Flex>
                <Checkbox isChecked={category.includes('top-wear')} onChange={(e) => handleChange(e)} value={'top-wear'} mr={'8px'} />
                <label>Top-Wear</label>
            </Flex>
            <Flex>
                <Checkbox isChecked={category.includes('bottom-wear')} onChange={(e) => handleChange(e)} value={'bottom-wear'} mr={'8px'} />
                <label>Bottom-Wear</label>
            </Flex>
            <Flex>
                <Checkbox isChecked={category.includes('foot-wear')} onChange={(e) => handleChange(e)} value={'foot-wear'} mr={'8px'} />
                <label>Foot-Wear</label>
            </Flex>

            <Heading m={'20px 0 10px 0'} size={'md'}>Filter By Gender</Heading>
            <Flex>
                <Checkbox isChecked={gender.includes('male')} value={'male'} onChange={(e) => handleGender(e)} mr={'8px'} />
                <label>Men</label>
            </Flex>
            <Flex>
                <Checkbox isChecked={gender.includes('female')} value={'female'} onChange={(e) => handleGender(e)} mr={'8px'} />
                <label>Women</label>
            </Flex>
            <Flex>
                <Checkbox isChecked={gender.includes('kids')} value={'kids'} onChange={(e) => handleGender(e)} mr={'8px'} />
                <label>Kids</label>
            </Flex>

            <Heading m={'20px 0 10px 0'} size={'md'}>Sort By Price</Heading>
            <Box onChange={(e) => setOrder(e.target.value)}>
                <Box>
                    <input defaultChecked={order === 'asc'} type="radio" name='order' value={'asc'} />
                    <label style={{ marginLeft: '8px' }}>Ascending</label>
                </Box>
                <Box>
                    <input defaultChecked={order === 'desc'} type="radio" name='order' value={'desc'} />
                    <label style={{ marginLeft: '8px' }}>Descending</label>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar;