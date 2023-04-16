import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../pages/Login';

const PrivateRoute = ({children}) => {
  const auth = useSelector(store => store.authReducer.isAuth);
//   console.log(auth)
  return auth ? children : <Login/>;
}

export default PrivateRoute;