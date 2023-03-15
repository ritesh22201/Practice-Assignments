import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile';
import { useContext } from 'react';
import UserContext from './Components/UserContext';

function App() {
  let user = useContext(UserContext);

  return (
    <div className="App">
      <Profile/>
      <h1>{user.name}</h1>
      <h3>{user.role}</h3>
    </div>
  );
}

export default App;
