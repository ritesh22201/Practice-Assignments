import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todos from './Components/Todos';
import Header from './Components/header';
import TodoList from './Components/TodoList';

function App() {
  const [input, setInput] = useState('');
  const [todo, setTodos] = useState([]);
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Todos input={input} setInput={setInput} todo={todo} setTodos={setTodos} />
      </div>
      <div>
        <TodoList todo={todo} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
