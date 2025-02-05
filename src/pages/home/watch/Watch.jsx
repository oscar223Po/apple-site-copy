import React from 'react'
import style from './Watch.module.scss';
import img from '../../../assets/img/homeImages';
import Button from '../../../components/button/button';
import Label from '../../../components/label/Label';

const WatchSection = ({ text = "secondary" }) => {
	return (
		<div className={style.main}>
			<div className={style.body}>
				<div className={style.title}>
					<img src={img.watchTitle.src} alt={img.watchTitle.alt} />
				</div>
				<div className={`${style.text} text--${text}`}>
					<p>Our thinnest watch with our biggest display.<span>1</span> Invaluable health insights, including sleep apnea notifications. <span>2</span> Tracking for your activity and workouts — with depth and water temperature. All in our fastest-charging watch ever. <span>3</span></p>
				</div>
				<Label inner="Available starting 9.20" />
				<div className={style.actions}>
					<Button type="black" inner="Learn more" />
					<Button type="black" inner="Pre-order" />
				</div>
			</div>
			<div className={style.images}>
				<img src={img.watch.src} alt={img.watch.alt} />
				<img src={img.watchMob.src} alt={img.watchMob.alt} />
			</div>
		</div>
	)
}

export default WatchSection
