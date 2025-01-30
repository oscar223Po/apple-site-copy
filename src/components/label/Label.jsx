import './Label.scss';
import React from 'react'

const Label = ({ inner, className = "" }) => {
	return (
		<div className={`labels ${className}`}>
			{Array.isArray(inner) ? inner.map((item, index) => (
				<div key={index} className="label">{item}</div>
			)) : <div className="label">{inner}</div>}
		</div>
	)
}

export default Label