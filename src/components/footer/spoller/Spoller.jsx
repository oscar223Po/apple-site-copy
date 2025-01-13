import React, { useState, useEffect } from 'react';
import stSpoller from './Spoller.module.scss';
import { useLocation } from 'react-router-dom';


// Компонент спойлера
const Spoller = ({ title, links, path }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	// Хук для отслеживания ширины экрана
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 767); // Проверяем ширину экрана
		};

		// Инициализируем проверку при монтировании компонента
		handleResize();

		// Добавляем обработчик события изменения размера окна
		window.addEventListener('resize', handleResize);

		// Убираем обработчик при размонтировании компонента
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const toggleOpen = () => setIsOpen(!isOpen);

	const location = useLocation();
	const spollerClass = !['/ipad'].includes(location.pathname) ? stSpoller.spoller : stSpoller.spollerWhite;

	return (
		<div className={`${stSpoller.spoller} ${spollerClass}`}>
			{/* Заголовок с активным классом */}
			{isMobile ? (
				<div
					className={`${stSpoller.spollerTitle} ${isOpen ? stSpoller.active : ''}`}
					onClick={toggleOpen}
				>
					{title}
					<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.075 0.89502L5.49999 5.54302L0.924988 0.89502"
							stroke="black"
							strokeOpacity="0.88"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			) : (
				<div className={stSpoller.spollerTitle}>{title}</div>
			)}

			{/* Если мобильный режим и спойлер открыт, отображаем ссылки */}
			{isMobile && isOpen && (
				<ul className={stSpoller.spollerList}>
					{links.map((link, index) => (
						<li key={index}>
							<a href="#">{link}</a>
						</li>
					))}
				</ul>
			)}

			{/* Для больших экранов просто показываем все ссылки */}
			{!isMobile && (
				<ul className={stSpoller.spollerList}>
					{links.map((link, index) => (
						<li key={index}>
							<a href="#">{link}</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Spoller;
