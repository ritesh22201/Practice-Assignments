import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.getAll('category');
    const initialGender = searchParams.getAll('gender');
    const initialOrder = searchParams.get('order');
    const [category, setCategory] = useState(initialCategory || []);
    const [gender, setGender] = useState(initialGender || []);
    const [order, setOrder] = useState(initialOrder || '');

    useEffect(() => {
        const params = {
            gender,
            category, 
            order
        }

        order && (params.order = order)
        setSearchParams(params);

    }, [category, gender, order])

    const handleCategory = (e) => {
        const { value } = e.target;
        let newCategory = [...category];
        if (newCategory.includes(value)) {
            newCategory = newCategory.filter(el => el !== value);
        }
        else {
            newCategory.push(value)
        }
        setCategory(newCategory);
    }

    const handleGender = (e) => {
        const { value } = e.target;
        let newGender = [...gender];
        if (newGender.includes(value)) {
            newGender = newGender.filter(el => el !== value);
        }
        else {
            newGender.push(value);
        }
        setGender(newGender);
    }

    const handleOrder = (e) => {
        const {value} = e.target;
        setOrder(value)
    }

    return (
        <DIV>
            <h3>Filter by Category</h3>
            <div>
                <input type="checkbox" checked={category.includes('top-wear')} onChange={(e) => handleCategory(e)} value={'top-wear'} />
                <label>Top Wear</label>
            </div>
            <div>
                <input type="checkbox" checked={category.includes('bottom-wear')} onChange={(e) => handleCategory(e)} value={'bottom-wear'} />
                <label>Bottom Wear</label>
            </div>
            <div>
                <input type="checkbox" checked={category.includes('foot-wear')} onChange={(e) => handleCategory(e)} value={'foot-wear'} />
                <label>Foot Wear</label>
            </div>
            <h3>Filter by Gender</h3>
            <div>
                <input type="checkbox" checked={gender.includes('male')} onChange={(e) => handleGender(e)} value={'male'} />
                <label>Men</label>
            </div>
            <div>
                <input type="checkbox" checked={gender.includes('female')} onChange={(e) => handleGender(e)} value={'female'} />
                <label>Women</label>
            </div>
            <div>
                <input type="checkbox" checked={gender.includes('kids')} onChange={(e) => handleGender(e)} value={'kids'} />
                <label>Kids</label>
            </div>
            <h3>Sort By Price</h3>
            <div onChange={handleOrder}>
                <div>
                    <input type="radio" name='order' value={'asc'} defaultChecked={order === 'asc'} />
                    <label>Ascending</label>
                </div>
                <div>
                    <input type="radio" name='order' value={'desc'} defaultChecked={order === 'desc'} />
                    <label>Descending</label>
                </div>
            </div>
        </DIV>
    )
}

export default Sidebar;

const DIV = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding-left: 15px;
    border-right: 2px solid gray;
    min-height: 80vh;
`