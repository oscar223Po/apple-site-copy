import React from 'react'
import Slider from './slider/Slider';
import style from './Know.module.scss';

const Know = () => {
	return (
		<div className={style.main}>
			<div className="container">
				<div className="heading">
					<h3 className="heading__title title title--ord">Get to know iPhone.</h3>
				</div>
				<Slider />
			</div>
		</div>
	)
}

export default Know