import React from 'react'
import style from './Intel.module.scss';
import img from '../../../assets/img/homeImages';
import Button from '../../../components/button/button';
import Label from '../../../components/label/Label';

const IntelSection = ({ text = "secondary" }) => {
	return (
		<div className={style.main}>
			<div className={style.body}>
				<div className={style.head}>
					<h5 className={style.title}>iPhone 16</h5>
					<div className={style.subtitle}>
						<img src={img.intelSub.src} alt={img.intelSub.alt} />
					</div>
				</div>
				<div className={style.image}>
					<img src={img.intel.src} alt={img.intel.alt} />
				</div>
				<div className={style.bottom}>
					<div className={`${style.text} text--${text}`}>
						<p>Built for Apple Intelligence to help you write, express yourself, and get things done effortlessly. Camera Control, an easier way to quickly access camera tools. And the custom-built A18 chip.</p>
					</div>
					<Label className="label-white-mobile" inner={["Pre-order starting 9.13", "Available starting 9.20", "Apple Intelligence coming this fall"]} />
					<div className={style.actions}>
						<div className={style.actionsBlack}>
							<Button type="black" inner="Learn more" />
							<Button type="black" inner="View pricing" />
						</div>
						<div className={style.actionsWhite}>
							<Button type="white" inner="Learn more" />
							<Button type="white" inner="View pricing" />
						</div>
					</div>
				</div>
				<div className={style.imageMobile}>
					<img src={img.intelMob.src} alt={img.intelMob.alt} />
				</div>
			</div>
		</div>
	)
}

export default IntelSection