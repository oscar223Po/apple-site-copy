import React from 'react'
import "./App.scss"
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Store from './pages/Store'
import Mac from './pages/Mac'
import Ipad from './pages/Ipad'
import Iphone from './pages/iphone/Iphone'
import Watch from './pages/Watch'
import Vision from './pages/Vision'
import Airpods from './pages/Airpods'
import Tv from './pages/Tv'
import Entertainment from './pages/Entertainment'
import Accessories from './pages/Accessories'
import Support from './pages/Support'
import Nav from './components/nav/Nav'
import Preorder from './components/preorder/Preorder'

const App = () => {
	const location = useLocation();
	const showNav = location.pathname === '/iphone';
	return (
		<div className="wrapper">
			<Header />
			{showNav && (
				<>
					<Nav />
					<Preorder />
				</>
			)}
			<main className="page">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/store' element={<Store />} />
					<Route path='/mac' element={<Mac />} />
					<Route path='/ipad' element={<Ipad />} />
					<Route path='/iphone' element={<Iphone />} />
					<Route path='/watch' element={<Watch />} />
					<Route path='/vision' element={<Vision />} />
					<Route path='/airpods' element={<Airpods />} />
					<Route path='/tv' element={<Tv />} />
					<Route path='/entertainment' element={<Entertainment />} />
					<Route path='/accessories' element={<Accessories />} />
					<Route path='/support' element={<Support />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App