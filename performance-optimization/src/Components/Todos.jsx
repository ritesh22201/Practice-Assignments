import React from 'react'

const Todos = ({title, status}) => {
  return (
    <div>
        <h3>{title}</h3>
        <p>{status ? 'True' : 'False'}</p>
    </div>
  )
}

export default Todos