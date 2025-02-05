import React from 'react'
import './Button.scss';

const ButtonBorderBlack = ({ inner }) => {
	return (
		<a target="_blank" href="https://google.com" rel="noopener noreferrer" className="button-border-black">{inner}</a>
	)
}

export default ButtonBorderBlack