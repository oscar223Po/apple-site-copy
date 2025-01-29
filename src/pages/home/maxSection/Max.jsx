import React from 'react'
import stHome from './Max.module.scss';
import img from '../../../assets/img/homeImages';
import Button from '../../../components/button/button';

const MaxSection = ({ type = "secondary" }) => {
	return (
		<div className={stHome.max}>
			<div className={stHome.body}>
				<div className={stHome.head}>
					<h3 className={stHome.title}>AirPods Max</h3>
					<div className={`${stHome.text} ${[`text--${type}`]}`}>
						<p>The ultimate over-ear personal listening experience. Now in fresh new colors with fast and easy USB-C charging.</p>
					</div>
				</div>
				<div className={stHome.image}>
					<img src={img.podsMax.src} alt={img.podsMax.alt} />
				</div>
				<div className={stHome.label}>Available starting 9.20</div>
				<div className={stHome.actions}>
					<Button type="black" inner="Learn more" />
					<Button type="black" inner="Pre-order" />
				</div>
				<div className={stHome.imageMobile}>
					<img src={img.podsMax.src} alt={img.podsMax.alt} />
				</div>
			</div>
		</div>
	)
}

export default MaxSection
