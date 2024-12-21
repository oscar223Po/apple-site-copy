import React from 'react'
import stHome from '../Home.module.scss';
import images from '../../../assets/img/images';
import ButtonBorderBlack from '../../../components/layout/buttons/ButtonBorderBlack';
import ButtonBorderWhite from '../../../components/layout/buttons/ButtonBorderWhite';

const IntelSection = () => {
	return (
		<div className={stHome.intel}>
			<div className={stHome.intelBody}>
				<div className={stHome.intelHeading}>
					<h5 className={stHome.intelTitle}>iPhone 16</h5>
					<div className={stHome.intelSubtitle}>
						<img src={images.intelSubtitle.src} alt={images.intelSubtitle.alt} />
					</div>
				</div>
				<div className={stHome.intelImage}>
					<img src={images.intelImage.src} alt={images.intelImage.alt} />
				</div>
				<div className={stHome.intelBottom}>
					<div className={stHome.intelText}>
						<p>Built for Apple Intelligence to help you write, express yourself, and get things done effortlessly. Camera Control, an easier way to quickly access camera tools. And the custom-built A18 chip.</p>
					</div>
					<div className={stHome.intelList}>
						<span>Pre-order starting 9.13</span>
						<span>Available starting 9.20</span>
						<span>Apple Intelligence coming this fall</span>
					</div>
					<div className={stHome.intelActions}>
						<div className={stHome.intelActionsBlack}>
							<ButtonBorderBlack inner="Learn more" />
							<ButtonBorderBlack inner="View pricing" />
						</div>
						<div className={stHome.intelActionsWhite}>
							<ButtonBorderWhite inner="Learn more" />
							<ButtonBorderWhite inner="View pricing" />
						</div>
					</div>
				</div>
				<div className={stHome.intelImageMobile}>
					<img src={images.intelMobile.src} alt={images.intelMobile.alt} />
				</div>
			</div>
		</div>
	)
}

export default IntelSection