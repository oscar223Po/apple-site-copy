import React from 'react'
import './Button.scss';

const ButtonBlue = ({ inner }) => {
	return (
		<a target="_blank" href="https://google.com" rel="noopener noreferrer" className="button-blue">{inner}</a>
	)
}

export default ButtonBlue