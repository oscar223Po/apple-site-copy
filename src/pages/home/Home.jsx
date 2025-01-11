import React from 'react'
import HeroSection from './heroSection/Hero';
import IntelSection from './intelSection/Intel';
import WatchSection from './watchSection/Watch';
import UltraSection from './ultraSection/Ultra';
import PodsSection from './podsSection/Pods';
import ProSection from './proSection/Pro';
import MaxSection from './maxSection/Max';

const Home = () => {
	return (
		<>
			<HeroSection />
			<IntelSection />
			<WatchSection />
			<UltraSection />
			<PodsSection />
			<ProSection />
			<MaxSection />
		</>
	)
}

export default Home