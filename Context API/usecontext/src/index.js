import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContext from './Components/UserContext';

let userInfo = {
  name : 'Ritesh Goswami', 
  role : 'MERN Developer',
  image : 'https://avatars.githubusercontent.com/u/112602790?v=4',
  message : 'Hello from Ritesh Goswami'
}

render( <UserContext.Provider value={userInfo}>
  <App />
</UserContext.Provider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
