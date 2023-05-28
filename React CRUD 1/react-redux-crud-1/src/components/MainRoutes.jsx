import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'
import EditPage from '../pages/EditPage'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/editpage' element={
                    <PrivateRoute>
                        <EditPage />
                    </PrivateRoute>
                } />
                <Route path='/add-product' />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={
                    <PrivateRoute>
                        <Admin />
                    </PrivateRoute>
                } />
                <Route path='*' element={'Error 404 not found'} />
            </Routes>
        </div>
    )
}

export default MainRoutes