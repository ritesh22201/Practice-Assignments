import logo from './logo.svg';
import './App.css';
import Admin from './components/Admin';
import MainRoutes from './components/MainRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
