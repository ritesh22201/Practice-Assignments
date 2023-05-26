import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import Admin from '../Pages/Admin'
import PrivateRoute from '../Components/PrivateRoute'
import EditProduct from '../Pages/EditProduct'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/edit/:id' element={
                    <PrivateRoute>
                        <EditProduct />
                    </PrivateRoute>
                } />
                <Route path='/admin' element={
                    <PrivateRoute>
                        <Admin />
                    </PrivateRoute>
                } />
            </Routes>
        </div>
    )
}

export default MainRoutes