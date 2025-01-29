import React from 'react'
import stHome from './Hero.module.scss';
import images from "../../../assets/img/homeImages"
import Button from '../../../components/button/button';

const HeroSection = ({ type = "primary" }) => {
	return (
		<div className={stHome.hero}>
			<div className={stHome.body}>
				<div className={stHome.image}>
					<img src={images.hero.src} alt={images.hero.alt} />
				</div>
				<div className={`${stHome.text} ${[`text--${type}`]}`}>
					<p>Introducing iPhone 16 Pro and iPhone 16, built for Apple Intelligence. All‑new Apple Watch Series 10 and AirPods 4. Apple Watch Ultra 2 and AirPods Max in fresh new colors. And AirPods Pro 2, with hearing health features coming this fall.</p>
				</div>
				<Button type="white" inner="Watch the event" />
			</div>
		</div>
	)
}

export default HeroSection