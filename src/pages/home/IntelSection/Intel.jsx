import React from 'react'
import stHome from './Intel.module.scss';
import img from '../../../assets/img/homeImages';
import Button from '../../../components/button/button';
import Label from '../../../components/label/Label';

const IntelSection = ({ type = "secondary" }) => {
	return (
		<div className={stHome.intel}>
			<div className={stHome.body}>
				<div className={stHome.head}>
					<h5 className={stHome.title}>iPhone 16</h5>
					<div className={stHome.subtitle}>
						<img src={img.intelSub.src} alt={img.intelSub.alt} />
					</div>
				</div>
				<div className={stHome.image}>
					<img src={img.intel.src} alt={img.intel.alt} />
				</div>
				<div className={stHome.bottom}>
					<div className={`${stHome.text} ${[`text--${type}`]}`}>
						<p>Built for Apple Intelligence to help you write, express yourself, and get things done effortlessly. Camera Control, an easier way to quickly access camera tools. And the custom-built A18 chip.</p>
					</div>
					<Label className="label-white-mobile" inner={["Pre-order starting 9.13", "Available starting 9.20", "Apple Intelligence coming this fall"]} />
					<div className={stHome.actions}>
						<div className={stHome.actionsBlack}>
							<Button type="black" inner="Learn more" />
							<Button type="black" inner="View pricing" />
						</div>
						<div className={stHome.actionsWhite}>
							<Button type="white" inner="Learn more" />
							<Button type="white" inner="View pricing" />
						</div>
					</div>
				</div>
				<div className={stHome.imageMobile}>
					<img src={img.intelMob.src} alt={img.intelMob.alt} />
				</div>
			</div>
		</div>
	)
}

export default IntelSection