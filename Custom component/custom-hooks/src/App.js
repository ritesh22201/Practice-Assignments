import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import PinTab from './components/PinTab';

function App() {
  return (
    <div className="App">
      <h1>Custom/Generic Components</h1>
      {/* <Button colorScheme = 'defaultColor' size = 'medium'>My button</Button> */}
      <PinTab length={4} maxChar={1}/>
    </div>
  );
}

export default App;
