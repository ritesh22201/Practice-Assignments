import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children, size, color, onClick}) => {
  return (
    <div>
        <button data-testid='button-component' className={`${size} ${color}`} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button;

Button.propTypes = {
    size : PropTypes.size.isRequired
}