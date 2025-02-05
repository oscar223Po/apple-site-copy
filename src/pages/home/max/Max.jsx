import React from 'react'
import style from './Max.module.scss';
import img from '../../../assets/img/homeImages';
import Button from '../../../components/button/button';
import Label from '../../../components/label/Label';

const MaxSection = ({ text = "secondary" }) => {
	return (
		<div className={style.main}>
			<div className={style.body}>
				<div className={style.head}>
					<h3 className={style.title}>AirPods Max</h3>
					<div className={`${style.text} text--${text}`}>
						<p>The ultimate over-ear personal listening experience. Now in fresh new colors with fast and easy USB-C charging.</p>
					</div>
				</div>
				<div className={style.image}>
					<img src={img.podsMax.src} alt={img.podsMax.alt} />
				</div>
				<Label inner="Available starting 9.20" />
				<div className={style.actions}>
					<Button type="black" inner="Learn more" />
					<Button type="black" inner="Pre-order" />
				</div>
				<div className={style.imageMobile}>
					<img src={img.podsMax.src} alt={img.podsMax.alt} />
				</div>
			</div>
		</div>
	)
}

export default MaxSection
