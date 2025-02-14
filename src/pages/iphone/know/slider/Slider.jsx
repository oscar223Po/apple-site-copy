import React, { useRef, useEffect } from "react";
import style from './Slider.module.scss';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "../../../../assets/img/iphoneImages";
import "swiper/css";
import "swiper/css/navigation";

const slidesData = [
	{
		img: images.slide1,
		title: "Apple Intelligence",
		subtitle: "AI‑opening possibilities.",
		customStyle: {}
	},
	{
		img: images.slide2,
		title: "Cutting-Edge Cameras",
		subtitle: "Picture your best photos and videos.",
		customStyle: {}
	},
	{
		img: images.slide3,
		title: "Chip and Battery Life",
		subtitle: "Fast that lasts.",
		customStyle: {}
	},
	{
		img: images.slide4,
		title: "Innovation",
		subtitle: "Beautiful and durable, by design.",
		customStyle: { color: '#1d1d1f' }
	},
	{
		img: images.slide1,
		title: "Apple Intelligence",
		subtitle: "AI‑opening possibilities.",
		customStyle: {}
	},
	{
		img: images.slide2,
		title: "Cutting-Edge Cameras",
		subtitle: "Picture your best photos and videos.",
		customStyle: {}
	},
];

function PlusButton() {
	return (
		<button type="button" className={style.plus}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.525 6.659H9.35V1.475C9.35 1.11696 9.20777 0.77358 8.95459 0.520406C8.70142 0.267232 8.35804 0.125 8 0.125C7.64196 0.125 7.29858 0.267232 7.04541 0.520406C6.79223 0.77358 6.65 1.11696 6.65 1.475V6.65H1.475C1.11696 6.65 0.77358 6.79223 0.520406 7.04541C0.267232 7.29858 0.125 7.64196 0.125 8C0.125 8.35804 0.267232 8.70142 0.520406 8.95459C0.77358 9.20777 1.11696 9.35 1.475 9.35H6.65V14.525C6.65 14.883 6.79223 15.2264 7.04541 15.4796C7.29858 15.7328 7.64196 15.875 8 15.875C8.35804 15.875 8.70142 15.7328 8.95459 15.4796C9.20777 15.2264 9.35 14.883 9.35 14.525V9.35H14.525C14.883 9.35 15.2264 9.20777 15.4796 8.95459C15.7328 8.70142 15.875 8.35804 15.875 8C15.875 7.64196 15.7328 7.29858 15.4796 7.04541C15.2264 6.79223 14.883 6.65 14.525 6.65V6.659Z" fill="#D6D6D7" />
			</svg>
		</button>
	);
}

export default function Slider() {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const swiperRef = useRef(null);

	useEffect(() => {
		if (swiperRef.current && swiperRef.current.swiper) {
			const swiper = swiperRef.current.swiper;
			swiper.params.navigation.prevEl = prevRef.current;
			swiper.params.navigation.nextEl = nextRef.current;
			swiper.navigation.init();
			swiper.navigation.update();
		}
	}, []);

	return (
		<>
			<Swiper
				ref={swiperRef}
				modules={[Navigation]}
				spaceBetween={20}
				slidesPerView={3.25}
				navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
				breakpoints={{
					320: { slidesPerView: 1.5, spaceBetween: 20 },
					767: { slidesPerView: 2.5, spaceBetween: 20 },
					1030: { slidesPerView: 3.25, spaceBetween: 20 },
				}}
				className={style.slider}
			>
				{slidesData.map(({ img, title, subtitle, customStyle }, index) => (
					<SwiperSlide key={index} className={style.slide}>
						<div className="image">
							<img src={img.src} alt={img.alt} />
						</div>
						<div className={style.head} style={customStyle}>
							<span>{title}</span>
							<span>{subtitle}</span>
						</div>
						<PlusButton />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="arrows">
				<button ref={prevRef} className="arrows__arrow arrows__arrow--prev">
					<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.55877 7.916C10.1448 8.5 10.1468 9.446 9.56477 10.034L2.60777 17.056C2.31477 17.352 1.92877 17.5 1.54277 17.5C1.16077 17.5 0.778771 17.355 0.486771 17.065C-0.102229 16.482 -0.105229 15.533 0.477771 14.944L6.38187 8.984L0.440871 3.062C-0.145129 2.478 -0.147128 1.5279 0.437871 0.941001C1.02187 0.354001 1.97387 0.353001 2.55887 0.938001L9.55877 7.916Z" fill="black" fillOpacity="0.56" />
					</svg>
				</button>
				<button ref={nextRef} className="arrows__arrow arrows__arrow--next">
					<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.55877 7.916C10.1448 8.5 10.1468 9.446 9.56477 10.034L2.60777 17.056C2.31477 17.352 1.92877 17.5 1.54277 17.5C1.16077 17.5 0.778771 17.355 0.486771 17.065C-0.102229 16.482 -0.105229 15.533 0.477771 14.944L6.38187 8.984L0.440871 3.062C-0.145129 2.478 -0.147128 1.5279 0.437871 0.941001C1.02187 0.354001 1.97387 0.353001 2.55887 0.938001L9.55877 7.916Z" fill="black" fillOpacity="0.56" />
					</svg>
				</button>
			</div>
		</>
	);
}
