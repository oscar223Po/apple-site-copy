import React from 'react'
import './Button.scss';

const ButtonBorderWhite = ({ inner }) => {
	return (
		<>
			<a target="_blank" href="https://google.com" rel="noopener noreferrer" className="button-border-white">{inner}</a>
		</>
	)
}

export default ButtonBorderWhite