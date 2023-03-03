import React from "react";
import {v4 as uuidv4} from 'uuid';
import '../style.css'

function Todos({input, setInput, todo, setTodos}) {
   let onInputChange = (e) => {
      setInput(e.target.value);
   }
   let formSubmit = (e) => {
      e.preventDefault();
      setTodos([...todo, {id : uuidv4(), title : input, completed : false}]);
      setInput('');
   }

   return <>
      <div className="container">
         <form onSubmit={formSubmit}>
            <input onChange={onInputChange} value={input} type="text" placeholder="Add a todo" required/>
            <button type="submit" className="btn">Add</button>
         </form>
      </div>
   </>
}

export default Todos;

