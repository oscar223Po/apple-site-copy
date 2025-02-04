import React from 'react'
import './Preorder.scss'
import { Link } from 'react-router-dom'

const Preorder = () => {
	return (
		<div className="preorder">
			Save time at iPhone pre-order. Get the prep work done now, then speed through checkout on 9.13. <Link to="/" className="preorder-link">Get started<svg viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.55877 7.916C10.1448 8.5 10.1468 9.446 9.56477 10.034L2.60777 17.056C2.31477 17.352 1.92877 17.5 1.54277 17.5C1.16077 17.5 0.778771 17.355 0.486771 17.065C-0.102229 16.482 -0.105229 15.533 0.477771 14.944L6.38187 8.984L0.440871 3.062C-0.145129 2.478 -0.147128 1.5279 0.437871 0.941001C1.02187 0.354001 1.97387 0.353001 2.55887 0.938001L9.55877 7.916Z" fill="#06c" /></svg></Link>
		</div>
	)
}

export default Preorder