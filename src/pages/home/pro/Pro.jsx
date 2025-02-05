import React from 'react'
import style from './Pro.module.scss';
import img from '../../../assets/img/homeImages';
import Button from '../../../components/button/button';

const ProSection = ({ text = "secondary" }) => {
	return (
		<div className={style.main}>
			<div className={style.body}>
				<h3 className={style.title}>AirPods Pro 2</h3>
				<div className={`${style.text} text--${text}`}>
					<p>Coming this fall with a free software update, the world’s first all-in-one hearing health experience — test, aid,<span>3</span> and help protect<span>5</span> your hearing.</p>
				</div>
				<div className={style.actions}>
					<Button type="white" inner="Learn more" />
					<Button type="white" inner="Buy" />
				</div>
			</div>
			<div className={style.image}>
				<img src={img.podsPro.src} alt={img.podsPro.alt} />
			</div>
		</div>
	)
}

export default ProSection
