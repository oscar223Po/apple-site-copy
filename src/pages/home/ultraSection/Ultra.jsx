import React from 'react'
import stHome from './Ultra.module.scss';
import img from '../../../assets/img/homeImages';
import Button from '../../../components/button/button';

const UltraSection = ({ type = "secondary" }) => {
	return (
		<div className={stHome.ultra}>
			<div className={stHome.body}>
				<div className={stHome.title}>
					<img src={img.ultraTitle.src} alt={img.ultraTitle.alt} />
				</div>
				<div className={`${stHome.text} ${[`text--${type}`]}`}>
					<p>The ultimate sports and adventure watch features a stunning new black titanium case. With connectivity, health, and safety features for the everyday. And the most accurate GPS in a sports watch. <span>4</span></p>
				</div>
				<div className={stHome.subtitle}>Available starting 9.20</div>
				<div className={stHome.actions}>
					<Button type="white" inner="Learn more" />
					<Button type="white" inner="Pre-order" />
				</div>
			</div>
			<div className={stHome.image}>
				<img src={img.ultra.src} alt={img.ultra.alt} />
			</div>
		</div>
	)
}

export default UltraSection
