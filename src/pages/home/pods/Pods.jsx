import React from 'react'
import style from './Pods.module.scss';
import Button from '../../../components/button/button';
import Label from '../../../components/label/Label';

const PodsSection = ({ text = "secondary" }) => {
	return (
		<div className={style.main}>
			<div className={style.body}>
				<h3 className={style.title}>AirPods 4</h3>
				<div className={`${style.text} text--${text}`}>
					<p>Updated fit for all-day comfort. A totally transformed audio experience. And available with Active Noise Cancellation — a first for this open-ear design.</p>
				</div>
				<Label className="label-white" inner="Available starting 9.20" />
				<div className={style.actions}>
					<Button type="white" inner="Learn more" />
					<Button type="white" inner="Pre-order" />
				</div>
			</div>
		</div>
	)
}

export default PodsSection
