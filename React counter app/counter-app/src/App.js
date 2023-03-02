import React, {useState} from 'react';
import './App.css';
import './style.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Counter counter = {count} setCounter = {setCount}/>
    </div>
  );
}

function Counter(props){
  return <>
    <div className='container'>
      <h1>Counter App</h1>
    </div>
    <div className='card'>
      <h1 className='counter'>{props.counter}</h1>
      <button className='btn increment' onClick={() => {props.setCounter(props.counter + 1)}}>Increment</button>
      <button className='btn decrement' disabled = {props.counter === 0} onClick={() => {props.setCounter(props.counter - 1)}}>Decrement</button>
      <button className='btn reset'disabled = {props.counter === 0} onClick={() => {props.setCounter(0)}}>Reset</button>
    </div>
  
  </>
}

export default App;
