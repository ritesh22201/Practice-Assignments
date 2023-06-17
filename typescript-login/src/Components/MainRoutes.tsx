import { Box } from '@chakra-ui/react';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const MainRoutes = () => {
  return (
    <Box>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </Box>
  )
}

export default MainRoutes;