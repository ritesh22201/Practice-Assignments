import React from 'react'
import Sidebar from '../Components/Sidebar'
import ProductList from '../Components/ProductList'
import { styled } from 'styled-components'

const HomePage = () => {
    return (
        <DIV>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='product-list'>
                <ProductList/>
            </div>
        </DIV>
    )
}

export default HomePage;

const DIV = styled.div`
   display: flex;

   .sidebar{
     width: 15%;
   }

   .product-list{
    width: 85%;
   }
`