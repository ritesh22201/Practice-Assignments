import React from 'react'

const Button = ({children, colorScheme = "defaultColor", size}) => {
  return (
    <button className={`${colorScheme} ${size}`}>
        {children}
    </button>
  )
}

export default Button