import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../../Pages/Home'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={Home}></Route>  
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>    
        </Routes>
    </div>
  )
}
