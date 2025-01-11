import React from 'react'
import stHome from './Pro.module.scss';
import img from '../../../assets/img/homeImages';
import Button from '../../../components/button/button';

const ProSection = () => {
	return (
		<div className={stHome.pro}>
			<div className={stHome.body}>
				<h3 className={stHome.title}>AirPods Pro 2</h3>
				<div className={stHome.text}>
					<p>Coming this fall with a free software update, the world’s first all-in-one hearing health experience — test, aid,<span>3</span> and help protect<span>5</span> your hearing.</p>
				</div>
				<div className={stHome.actions}>
					<Button type="white" inner="Learn more" />
					<Button type="white" inner="Buy" />
				</div>
			</div>
			<div className={stHome.image}>
				<img src={img.podsPro.src} alt={img.podsPro.alt} />
			</div>
		</div>
	)
}

export default ProSection
