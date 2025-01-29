import React from 'react'
import stHome from './Watch.module.scss';
import img from '../../../assets/img/homeImages';
import Button from '../../../components/button/button';

const WatchSection = ({ type = "secondary" }) => {
	return (
		<div className={stHome.watch}>
			<div className={stHome.body}>
				<div className={stHome.title}>
					<img src={img.watchTitle.src} alt={img.watchTitle.alt} />
				</div>
				<div className={`${stHome.text} ${[`text--${type}`]}`}>
					<p>Our thinnest watch with our biggest display.<span>1</span> Invaluable health insights, including sleep apnea notifications. <span>2</span> Tracking for your activity and workouts — with depth and water temperature. All in our fastest-charging watch ever. <span>3</span></p>
				</div>
				<div className={stHome.subtitle}>Available starting 9.20</div>
				<div className={stHome.actions}>
					<Button type="black" inner="Learn more" />
					<Button type="black" inner="Pre-order" />
				</div>
			</div>
			<div className={stHome.images}>
				<img src={img.watch.src} alt={img.watch.alt} />
				<img src={img.watchMob.src} alt={img.watchMob.alt} />
			</div>
		</div>
	)
}

export default WatchSection
