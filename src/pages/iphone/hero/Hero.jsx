import React from 'react'
import style from './Hero.module.scss';
import images from '../../../assets/img/iphoneImages';

const Hero = () => {
	return (
		<div className={style.hero}>
			<div className="container">
				<div className={style.body}>
					<div className="heading">
						<h3 className="heading__title title title--big">iPhone</h3>
						<h5 className="heading__subtitle">Designed to be loved.</h5>
					</div>
					{images.hero && (
						<div className={style.image}>
							<img src={images.hero.src} alt={images.hero.alt} />
							<button type="button" className={style.button} aria-label="Play video">
								<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.00007 12.2499V1.76989C0.974406 1.56624 0.992575 1.35946 1.05336 1.16341C1.11414 0.967358 1.21614 0.786568 1.3525 0.633157C1.48887 0.479746 1.65645 0.35726 1.84402 0.273911C2.0316 0.190561 2.23482 0.148275 2.44007 0.149885C2.83356 0.133094 3.22222 0.241639 3.55007 0.459885L12.0801 5.45989C12.8401 5.89989 13.2501 6.25989 13.2501 6.96989C13.2501 7.67989 12.8401 8.03989 12.0801 8.47989L3.55007 13.4799C3.22222 13.6981 2.83356 13.8067 2.44007 13.7899C2.24138 13.7934 2.04416 13.7552 1.86117 13.6777C1.67818 13.6002 1.5135 13.4851 1.37777 13.34C1.24204 13.1948 1.13829 13.0228 1.07323 12.835C1.00817 12.6472 0.983245 12.4479 1.00007 12.2499Z" fill="black" fillOpacity="0.56" />
								</svg>
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Hero