import logo from './logo.svg';
import './App.css';
import MainRoutes from './MainRoutes/MainRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr/>
      <MainRoutes/>
    </div>
  );
}

export default App;
