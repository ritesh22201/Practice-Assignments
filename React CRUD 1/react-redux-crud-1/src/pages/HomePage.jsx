import React from 'react'
import ProductList from '../components/ProductList'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

const HomePage = () => {
    return (
        <DIV>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='productlist'>
                <ProductList />
            </div>

        </DIV>
    )
}

const DIV = styled.div`
    display: flex;
    .sidebar{
        width: 15%;
    }

    .productlist{
        width: 85%;
    }
    
`

export default HomePage