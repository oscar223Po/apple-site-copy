import React from 'react'
import HeroSection from './heroSection/Hero';
import IntelSection from './intelSection/Intel';
import WatchSection from './watchSection/Watch';
import UltraSection from './ultraSection/Ultra';
import PodsSection from './podsSection/Pods';

const Home = () => {
	return (
		<>
			<HeroSection />
			<IntelSection />
			<WatchSection />
			<UltraSection />
			<PodsSection />
		</>
	)
}

export default Home