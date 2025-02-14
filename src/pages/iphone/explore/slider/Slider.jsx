import style from './Slider.module.scss';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import images from '../../../../assets/img/iphoneImages';
import Palette from '../../../../components/palette/Palette';
import ButtonBlue from '../../../../components/button/ButtonBlue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';

const slidesData = [
	{
		id: 1,
		image: images.explore1,
		title: 'iPhone 16',
		label: 'A total powerhouse.',
		cost: 'From $799 or $33.29/mo. for 24 mo.',
		options: [
			{ img: images.icon1, text: 'Apple Intelligence' },
			{ img: images.icon2, text: 'A18 chip with 5-core GPU' },
			{ img: images.icon3, text: 'Camera Control' },
			{
				img: images.icon4,
				texts: [
					'Advanced dual-camera system',
					'48MP Fusion camera',
					'2x Telephoto',
					'12MP Ultra Wide camera'
				]
			},
			{ img: images.icon5, text: 'Up to 27 hours video playback' }
		]
	},
	{
		id: 2,
		image: images.explore2,
		title: 'iPhone 15',
		label: 'Pro. Beyond.',
		cost: 'From $999 or $41.62/mo. for 24 mo.',
		options: [
			{ img: images.icon1, text: 'Apple Intelligence' },
			{ img: images.icon2, text: 'A18 chip with 5-core GPU' },
			{ img: images.icon3, text: 'Camera Control' },
			{
				img: images.icon4,
				texts: [
					'—',
					'48MP Fusion camera',
					'2x Telephoto',
					'12MP Ultra Wide camera'
				]
			},
			{ img: images.icon5, text: 'Up to 27 hours video playback' }
		]
	},
	{
		id: 3,
		image: images.explore3,
		title: 'iPhone 14',
		label: 'Pro. Beyond.',
		cost: 'From $999 or $41.62/mo. for 24 mo.',
		options: [
			{ img: images.icon1, text: 'Apple Intelligence' },
			{ img: images.icon2, text: 'A18 chip with 5-core GPU' },
			{ img: images.icon3, text: 'Camera Control' },
			{
				img: images.icon4,
				texts: [
					'Advanced dual-camera system',
					'48MP Fusion camera',
					'2x Telephoto',
					'—'
				]
			},
			{ img: images.icon5, text: 'Up to 27 hours video playback' }
		]
	},
	{
		id: 4,
		image: images.explore1,
		title: 'iPhone 16',
		label: 'A total powerhouse.',
		cost: 'From $799 or $33.29/mo. for 24 mo.',
		options: [
			{ img: images.icon1, text: 'Apple Intelligence' },
			{ img: images.icon2, text: 'A18 chip with 5-core GPU' },
			{ img: images.icon3, text: 'Camera Control' },
			{
				img: images.icon4,
				texts: [
					'Advanced dual-camera system',
					'48MP Fusion camera',
					'2x Telephoto',
					'12MP Ultra Wide camera'
				]
			},
			{ img: images.icon5, text: 'Up to 27 hours video playback' }
		]
	},
	{
		id: 5,
		image: images.explore2,
		title: 'iPhone 15',
		label: 'Pro. Beyond.',
		cost: 'From $999 or $41.62/mo. for 24 mo.',
		options: [
			{ img: images.icon1, text: 'Apple Intelligence' },
			{ img: images.icon2, text: 'A18 chip with 5-core GPU' },
			{ img: images.icon3, text: 'Camera Control' },
			{
				img: images.icon4,
				texts: [
					'—',
					'48MP Fusion camera',
					'2x Telephoto',
					'12MP Ultra Wide camera'
				]
			},
			{ img: images.icon5, text: 'Up to 27 hours video playback' }
		]
	}
];

const Option = ({ img, text, texts }) => (
	<div className={style.featureOption}>
		<div className={style.img}>
			{img?.src ? <img src={img.src} alt={img.alt || 'Option image'} /> : <span>No Image</span>}
		</div>
		{text && <div className={style.featureText}>{text}</div>}
		{texts && (
			<div className={style.featureList}>
				{texts.map((t, index) => (
					<div key={index} className={style.featureText}>{t}</div>
				))}
			</div>
		)}
	</div>
);

const ActionButtons = () => (
	<div className={style.actionButtons}>
		<ButtonBlue inner="Learn more" />
		<Link to="/" className="link">
			Buy
			<svg viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9.55877 7.916C10.1448 8.5 10.1468 9.446 9.56477 10.034L2.60777 17.056C2.31477 17.352 1.92877 17.5 1.54277 17.5C1.16077 17.5 0.778771 17.355 0.486771 17.065C-0.102229 16.482 -0.105229 15.533 0.477771 14.944L6.38187 8.984L0.440871 3.062C-0.145129 2.478 -0.147128 1.5279 0.437871 0.941001C1.02187 0.354001 1.97387 0.353001 2.55887 0.938001L9.55877 7.916Z" fill="#06c" />
			</svg>
		</Link>
	</div>
);

export default function Slider({ isActive }) {
	const swiperRef = useRef(null);

	useEffect(() => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.navigation.init();
			swiperRef.current.swiper.navigation.update();
		}
	}, []);

	return (
		<>
			<Swiper
				ref={swiperRef}
				slidesPerView="auto"
				modules={[Navigation]}
				className={style.sliderContainer}
				navigation={{
					prevEl: ".arrow-explore--prev",
					nextEl: ".arrow-explore--next",
				}}
			>
				{slidesData.map(({ id, image, title, label, cost, options }) => (
					<SwiperSlide key={id} className={style.slideItem}>
						<div className={style.slideBody}>
							<div className={style.slideContent}>
								<Link to="/" className={`${style.slideImage} image`}>
									{image?.src ? <img src={image.src} alt={image.alt || 'Slide image'} /> : <span>No Image</span>}
								</Link>
								<Palette />
								<div className={style.slideInfo}>
									<div className={style.productInfo}>
										<div className={style.newLabel}>New</div>
										<h4 className={style.title}>{title}</h4>
										<div className={style.label}>{label}</div>
										<div className={style.priceText}>{cost}</div>
									</div>
									<ActionButtons />
								</div>
							</div>
							<div className={style.options}>
								{options.map((option, index) => (
									<Option key={index} {...option} />
								))}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Первая группа кнопок */}
			<div className="arrows">
				<button className="arrows__arrow arrows__arrow--prev arrow-explore arrow-explore--prev">
					<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.55877 7.916C10.1448 8.5 10.1468 9.446 9.56477 10.034L2.60777 17.056C2.31477 17.352 1.92877 17.5 1.54277 17.5C1.16077 17.5 0.778771 17.355 0.486771 17.065C-0.102229 16.482 -0.105229 15.533 0.477771 14.944L6.38187 8.984L0.440871 3.062C-0.145129 2.478 -0.147128 1.5279 0.437871 0.941001C1.02187 0.354001 1.97387 0.353001 2.55887 0.938001L9.55877 7.916Z" fill="black" fillOpacity="0.56" />
					</svg>
				</button>
				<button className="arrows__arrow arrows__arrow--next arrow-explore arrow-explore--next">
					<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.55877 7.916C10.1448 8.5 10.1468 9.446 9.56477 10.034L2.60777 17.056C2.31477 17.352 1.92877 17.5 1.54277 17.5C1.16077 17.5 0.778771 17.355 0.486771 17.065C-0.102229 16.482 -0.105229 15.533 0.477771 14.944L6.38187 8.984L0.440871 3.062C-0.145129 2.478 -0.147128 1.5279 0.437871 0.941001C1.02187 0.354001 1.97387 0.353001 2.55887 0.938001L9.55877 7.916Z" fill="black" fillOpacity="0.56" />
					</svg>
				</button>
			</div>

			{/* Вторая группа кнопок */}
			<div className={`arrows-fixed ${isActive ? "active" : ""}`}>
				<button className="arrows__arrow arrows__arrow--prev arrow-explore arrow-explore--prev">
					<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.55877 7.916C10.1448 8.5 10.1468 9.446 9.56477 10.034L2.60777 17.056C2.31477 17.352 1.92877 17.5 1.54277 17.5C1.16077 17.5 0.778771 17.355 0.486771 17.065C-0.102229 16.482 -0.105229 15.533 0.477771 14.944L6.38187 8.984L0.440871 3.062C-0.145129 2.478 -0.147128 1.5279 0.437871 0.941001C1.02187 0.354001 1.97387 0.353001 2.55887 0.938001L9.55877 7.916Z" fill="black" fillOpacity="0.56" />
					</svg>
				</button>
				<button className="arrows__arrow arrows__arrow--next arrow-explore arrow-explore--next">
					<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.55877 7.916C10.1448 8.5 10.1468 9.446 9.56477 10.034L2.60777 17.056C2.31477 17.352 1.92877 17.5 1.54277 17.5C1.16077 17.5 0.778771 17.355 0.486771 17.065C-0.102229 16.482 -0.105229 15.533 0.477771 14.944L6.38187 8.984L0.440871 3.062C-0.145129 2.478 -0.147128 1.5279 0.437871 0.941001C1.02187 0.354001 1.97387 0.353001 2.55887 0.938001L9.55877 7.916Z" fill="black" fillOpacity="0.56" />
					</svg>
				</button>
			</div>
		</>
	);
}
