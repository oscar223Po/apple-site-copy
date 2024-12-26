import React from 'react'
import stHome from './Pods.module.scss';
import Button from '../../../components/button/button';

const PodsSection = () => {
	return (
		<div className={stHome.pods}>
			<div className={stHome.body}>
				<h3 className={stHome.title}>AirPods 4</h3>
				<div className={stHome.text}>
					<p>Updated fit for all-day comfort. A totally transformed audio experience. And available with Active Noise Cancellation — a first for this open-ear design.</p>
				</div>
				<div className={stHome.subtitle}>Available starting 9.20</div>
				<div className={stHome.actions}>
					<Button type="white" inner="Learn more" />
					<Button type="white" inner="Pre-order" />
				</div>
			</div>
		</div>
	)
}

export default PodsSection
