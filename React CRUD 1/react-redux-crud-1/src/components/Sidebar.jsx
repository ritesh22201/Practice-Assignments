import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialGender = searchParams.getAll('gender');
    const initialCategory = searchParams.getAll('category');
    const initialOrder = searchParams.get('order');
    const [gender, setGender] = useState(initialGender || []);
    const [category, setCategory] = useState(initialCategory || []);
    const [order, setOrder] = useState(initialOrder || '');

    useEffect(() => {
       let params = {
        gender,
        category
       }
       order && (params.order = order)

       setSearchParams(params);
    }, [gender, category, order])

    const handleCategory = (e) => {
        const {value} = e.target;
        let newCategory = [...category];
        if(newCategory.includes(value)){
            newCategory = newCategory.filter(el => el !== value);
        }
        else{
            newCategory.push(value)
        }
        setCategory(newCategory);
    }

    const handleSort = (e) => {
        const {value} = e.target;
        setOrder(value);
    }

    const genderChange = (e) => {
        // console.log(e.target.value)
        const {value} = e.target;
        let newGender = [...gender];
        if(newGender.includes(value)){
            newGender = newGender.filter(el => el !== value);
        }
        else{
            newGender.push(value);
        }

        setGender(newGender);
    }
    return (
        <div>
            <h3>Filter By Gender</h3>
            <div>
                <input type="checkbox" value={"male"} onChange={genderChange} checked={gender.includes('male')}/>
                <label htmlFor="">Men</label>

                <input type="checkbox" value={"female"} onChange={genderChange} checked={gender.includes('female')}/>
                <label htmlFor="">Women</label>

                <input type="checkbox" value={"kids"} onChange={genderChange} checked={gender.includes('kids')}/>
                <label htmlFor="">Kids</label>
            </div>
            <br />
            <h3>Filter by Category</h3>
            <div>
                <input type="checkbox" checked={category.includes('top-wear')} onChange={handleCategory} value={'top-wear'}/>
                <label htmlFor="">Top Wear</label>

                <input type="checkbox" checked={category.includes('bottom-wear')} onChange={handleCategory} value={'bottom-wear'}/>
                <label htmlFor="">Bottom Wear</label>

                <input type="checkbox" checked={category.includes('shoes')} onChange={handleCategory} value={'shoes'}/>
                <label htmlFor="">Shoes</label>
            </div>
            <br />
            <h3>Sort By Price</h3>
            <div onChange={handleSort}>
                <input type="radio" defaultChecked={order === "asc"} name='order' value={'asc'}/>
                <label htmlFor="">Ascending</label>
                <input type="radio" defaultChecked={order === "desc"} name='order' value={'desc'}/>
                <label htmlFor="">Descending</label>
            </div>
        </div>
    )
}

export default Sidebar