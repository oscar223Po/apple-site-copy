import React from 'react'
import style from './Hero.module.scss';
import images from "../../../assets/img/homeImages"
import Button from '../../../components/button/button';

const HeroSection = ({ text = "primary" }) => {
	return (
		<div className={style.main}>
			<div className={style.body}>
				<div className={style.image}>
					<img src={images.hero.src} alt={images.hero.alt} />
				</div>
				<div className={`${style.text} text--${text}`}>
					<p>Introducing iPhone 16 Pro and iPhone 16, built for Apple Intelligence. All‑new Apple Watch Series 10 and AirPods 4. Apple Watch Ultra 2 and AirPods Max in fresh new colors. And AirPods Pro 2, with hearing health features coming this fall.</p>
				</div>
				<Button type="white" inner="Watch the event" />
			</div>
		</div>
	)
}

export default HeroSection