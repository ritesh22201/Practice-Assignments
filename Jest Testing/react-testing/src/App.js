import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1 data-testid='counter'>Counter : {count}</h1>
      <Button onClick={() => setCount(prev => prev + 1)} size={'medium'} color={'gray'}>Click-Me</Button>
    </div>
  );
}

export default App;
