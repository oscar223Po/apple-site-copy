import React from 'react'
import "./App.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer'
import Home from './pages/home/Home'
import Store from './pages/Store'
import Mac from './pages/Mac'
import Ipad from './pages/Ipad'
import Iphone from './pages/Iphone'
import Watch from './pages/Watch'
import Vision from './pages/Vision'
import Airpods from './pages/Airpods'
import Tv from './pages/Tv'
import Entertainment from './pages/Entertainment'
import Accessories from './pages/Accessories'
import Support from './pages/Support'

const App = () => {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
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
		</BrowserRouter>
	)
}

export default App