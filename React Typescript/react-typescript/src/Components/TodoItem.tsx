import React from 'react'
import { Todo } from '../constants'

const TodoItem = ({id, title, status}: Todo) => {
    const handleToggle = () => {
        
    }
  return (
    <div style={{width: '30%', margin : 'auto', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
        <h3>{id}</h3>
        <h3>{title}</h3>
        <h3>{status ? 'Completed' : 'Not-Completed'}</h3>
        <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}

export default TodoItem