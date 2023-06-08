import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Login from '../Components/Login';
import Admin from '../Pages/Admin';
import EditPage from '../Pages/EditPage';
import PrivateRoutes from './PrivateRoutes';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={
                <PrivateRoutes>
                    <Admin />
                </PrivateRoutes>
            } />
            <Route path='/edit/:id' element={
                <PrivateRoutes>
                    <EditPage />
                </PrivateRoutes>
            } />
            <Route path='*' element={'Page Not Found'} />
        </Routes>
    )
}

export default MainRoutes;