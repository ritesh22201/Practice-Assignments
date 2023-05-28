import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import Products from '../Pages/Products';
import SingleProduct from '../Pages/SingleProduct';
import NotFound from '../Pages/NotFound';
import About from '../Pages/About';

export default function AllRoutes(){
    return(
        <Routes>
            <Route path='/'element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/products/:id' element={<SingleProduct/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
        </Routes>
    )
}