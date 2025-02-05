import React from 'react'
import style from './Ultra.module.scss';
import img from '../../../assets/img/homeImages';
import Button from '../../../components/button/button';
import Label from '../../../components/label/Label';

const UltraSection = ({ text = "secondary" }) => {
	return (
		<div className={style.main}>
			<div className={style.body}>
				<div className={style.title}>
					<img src={img.ultraTitle.src} alt={img.ultraTitle.alt} />
				</div>
				<div className={`${style.text} text--${text}`}>
					<p>The ultimate sports and adventure watch features a stunning new black titanium case. With connectivity, health, and safety features for the everyday. And the most accurate GPS in a sports watch. <span>4</span></p>
				</div>
				<Label className="label-white" inner="Available starting 9.20" />
				<div className={style.actions}>
					<Button type="white" inner="Learn more" />
					<Button type="white" inner="Pre-order" />
				</div>
			</div>
			<div className={style.image}>
				<img src={img.ultra.src} alt={img.ultra.alt} />
			</div>
		</div>
	)
}

export default UltraSection
