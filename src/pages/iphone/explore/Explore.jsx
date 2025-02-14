import React, { useEffect, useRef, useState } from 'react'
import style from './Explore.module.scss';
import { Link } from 'react-router-dom';
import Slider from './slider/Slider';

const Explore = () => {
	const sectionRef = useRef(null);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Проверяем, когда блок становится видимым на 30%
				if (entry.intersectionRatio >= 0.3) {
					setIsActive(true);
				} else {
					setIsActive(false);
				}
			},
			{
				threshold: 0.3, // Порог для активации (30% видимости)
			}
		);

		const currentSectionRef = sectionRef.current;

		// Наблюдаем за блоком
		if (currentSectionRef) {
			observer.observe(currentSectionRef);
		}

		// Очищаем наблюдателя при размонтировании компонента
		return () => {
			if (currentSectionRef) {
				observer.unobserve(currentSectionRef);
			}
		};
	}, []);

	// Обработчик для отслеживания нижней точки блока
	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current) return;

			const rect = sectionRef.current.getBoundingClientRect();
			const bottomOfViewport = window.innerHeight;

			// Проверка, когда нижняя граница экрана пересекает нижнюю точку блока
			if (rect.bottom <= bottomOfViewport) {
				setIsActive(false);
			}
		};

		// Слушаем события прокрутки
		window.addEventListener('scroll', handleScroll);

		// Очищаем слушатель при размонтировании компонента
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div ref={sectionRef} className={`${style.main} ${isActive ? style.active : ""}`}>
			<div className="container">
				<div className="heading">
					<h3 className="heading__title title title--ord">Explore the lineup.</h3>
					<Link to="/" className="heading__link link">Compare all models</Link>
				</div>
				<Slider isActive={isActive} />
			</div>
		</div>
	)
}

export default Explore


/*
<svg viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.55877 7.916C10.1448 8.5 10.1468 9.446 9.56477 10.034L2.60777 17.056C2.31477 17.352 1.92877 17.5 1.54277 17.5C1.16077 17.5 0.778771 17.355 0.486771 17.065C-0.102229 16.482 -0.105229 15.533 0.477771 14.944L6.38187 8.984L0.440871 3.062C-0.145129 2.478 -0.147128 1.5279 0.437871 0.941001C1.02187 0.354001 1.97387 0.353001 2.55887 0.938001L9.55877 7.916Z" fill="#06c" /></svg>
*/