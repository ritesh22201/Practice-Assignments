import React from 'react';
import HomePage from './HomePage';
import Todos from '../Components/Todos';
import Counter from '../Components/Counter';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../Components/PrivateRoute';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/counter' element={
          <PrivateRoute>
            <Counter/>
          </PrivateRoute>
        }/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default MainRoutes