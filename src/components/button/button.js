// Button.js
import React from 'react';
import ButtonBorderBlack from './ButtonBorderBlack';
import ButtonBorderWhite from './ButtonBorderWhite';

const Button = ({ type, inner }) => {
	if (type === 'black') {
		return <ButtonBorderBlack inner={inner} />;
	}
	if (type === 'white') {
		return <ButtonBorderWhite inner={inner} />;
	}
	return null; // Или можно добавить дефолтный тип
};

export default Button;