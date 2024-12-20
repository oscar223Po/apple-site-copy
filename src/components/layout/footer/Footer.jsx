import React from 'react'
import stFooter from './Footer.module.scss';
import Spoller from './spoller/Spoller';
import { useLocation } from 'react-router-dom';

const Footer = ({ path }) => {
	const location = useLocation();
	const footerClass = !['/iphone'].includes(location.pathname) ? stFooter.footer : stFooter.footerDark;
	return (
		<footer className={`${stFooter.footer} ${footerClass}`}>
			<div className={stFooter.container}>
				<div className={stFooter.text}>
					<p>* Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max, with Siri and device language set to U.S. English, as an iOS 18 update this fall. Some features and additional language will be coming over the course of the next year.</p>
					<p>Compared with previous generation.</p>
					<p>The Sleep Apnea Notification Feature is pending FDA clearance and expected to be available later this month. The feature will be supported on Apple Watch Series 9 and later and Ultra 2. It is intended to detect signs of moderate to severe sleep apnea for people 18 years old or older without a diagnosis of sleep apnea.</p>
					<p>Charge times are from 0–80% and 0–100% using the included Apple Watch Magnetic Fast Charger to USB-C Cable. Testing conducted by Apple in August 2024 using preproduction Apple Watch Series 10 (GPS) and Apple Watch Series 10 (GPS + Cellular), each paired with an iPhone; all devices tested with prerelease software, Apple Watch Magnetic Fast Charger to USB-C Cable (Model A2515), and Apple 20W USB-C Power Adapter (Model A2305). Fast-charge testing conducted with drained Apple Watch units. Times measured from the appearance of the Apple logo as the unit started up. Charge time varies with region, settings, and environmental factors; actual results will vary.</p>
					<p>Charge times are from 0–80% and 0–100% using the included Apple Watch Magnetic Fast Charger to USB-C Cable. Testing conducted by Apple in August 2024 using preproduction Apple Watch Series 10 (GPS) and Apple Watch Series 10 (GPS + Cellular), each paired with an iPhone; all devices tested with prerelease software, Apple Watch Magnetic Fast Charger to USB-C Cable (Model A2515), and Apple 20W USB-C Power Adapter (Model A2305). Fast-charge testing conducted with drained Apple Watch units. Times measured from the appearance of the Apple logo as the unit started up. Charge time varies with region, settings, and environmental factors; actual results will vary.</p>
					<p>Based on route map and distance accuracy in challenging urban environments.</p>
					<p>The Hearing Test and Hearing Aid features are expected to be available fall 2024. The Hearing Aid feature is pending FDA authorization. Both features will be supported on AirPods Pro 2 with the latest firmware paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and later and are intended for people 18 years old or older. The Hearing Aid feature will also be supported on a compatible Mac with macOS Sequoia and later. It is intended for people with perceived mild to moderate hearing loss.</p>
					<p>The Hearing Protection feature works with AirPods Pro 2 with the latest firmware when paired with a compatible iPhone, iPad, or Mac with iOS 18, iPadOS 18, or macOS Sequoia and later. Feature is only available in the U.S. and Canada. See Protection feature is not suitable for protection against extremely loud impulse sounds, such as gunfire, fireworks, or jackhammers, or against sustained sounds louder than 110 dBA.</p>
				</div>
				<div className={stFooter.list}>
					<div className={stFooter.listColumn}>
						<Spoller title="Shop and Learn" links={['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']} />
						<Spoller title="Apple Wallet" links={['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']} />
					</div>
					<div className={stFooter.listColumn}>
						<Spoller title="Account" links={['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']} />
						<Spoller title="Entertainment" links={['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store']} />
					</div>
					<div className={stFooter.listColumn}>
						<Spoller title="Apple Store" links={['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help']} />
					</div>
					<div className={stFooter.listColumn}>
						<Spoller title="For Business" links={['Apple and Business', 'Shop for Business']} />
						<Spoller title="For Education" links={['Apple and Education', 'Shop for K-12', 'Shop for College']} />
						<Spoller title="For Healthcare" links={['Apple in Healthcare', 'Mac in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone and iPad']} />
						<Spoller title="For Government" links={['Shop for Government', 'Shop for Veterans and Military']} />
					</div>
					<div className={stFooter.listColumn}>
						<Spoller title="Apple Values" links={['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supply Chain']} />
						<Spoller title="About Apple" links={['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple']} />
					</div>
				</div>
				<div className={stFooter.hide}>
					<div className={stFooter.hideHelp}>More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.</div>
					<div className={stFooter.hideBottom}>
						<div className={stFooter.hideSide}>
							<div className={stFooter.hideCopy}>Copyright © 2024 Apple Inc. All rights reserved.</div>
							<ul className={stFooter.hideList}>
								<li className={stFooter.hideListItem}><a href="#" className={stFooter.hideListLink}>Privacy Policy</a></li>
								<li className={stFooter.hideListItem}><a href="#" className={stFooter.hideListLink}>Terms of Use</a></li>
								<li className={stFooter.hideListItem}><a href="#" className={stFooter.hideListLink}>Sales and Refunds</a></li>
								<li className={stFooter.hideListItem}><a href="#" className={stFooter.hideListLink}>Legal</a></li>
								<li className={stFooter.hideListItem}><a href="#" className={stFooter.hideListLink}>Site Map</a></li>
							</ul>
						</div>
						<a href="#" className={stFooter.hideLocation}>United States</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer