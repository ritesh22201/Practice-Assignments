import logo from './logo.svg';
import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    axios.post('http://localhost:8080/counter', {value: count + 1})
    .then(res => {
       setCount(res.data.value)
    })
  }

  const handleReduce = () => {
    axios.post('http://localhost:8080/counter', {value: count - 1})
    .then(res => {
       setCount(res.data.value)
    })
  }

  useEffect(() => {
    axios.get('http://localhost:8080/counter')
    .then(res => {
      setCount(res.data.value);
    })
  }, [])

  return (
    <div className="App">
      <h1 data-testid='counter'>Counter : {count}</h1>
      <button data-testid='add-button' onClick={handleClick}>Add</button>
      <button data-testid='reduce-button' onClick={handleReduce}>Reduce</button>
    </div>
  );
}

export default App;
