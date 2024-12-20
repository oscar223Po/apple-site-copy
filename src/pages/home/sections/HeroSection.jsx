import React from 'react'
import stHome from '../Home.module.scss';
import images from "../../../assets/img/images"
import ButtonBorderWhite from '../../../components/layout/buttons/ButtonBorderWhite';

const HeroSection = () => {
	return (
		<div className={stHome.hero}>
			<div className={stHome.heroBody}>
				<div className={stHome.heroImage}>
					<img src={images.hero.src} alt={images.hero.alt} />
				</div>
				<div className={stHome.heroText}>
					<p>Introducing iPhone 16 Pro and iPhone 16, built for Apple Intelligence. All‑new Apple Watch Series 10 and AirPods 4. Apple Watch Ultra 2 and AirPods Max in fresh new colors. And AirPods Pro 2, with hearing health features coming this fall.</p>
				</div>
				<ButtonBorderWhite inner="Watch the event" />
			</div>
		</div>
	)
}

export default HeroSection