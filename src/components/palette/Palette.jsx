import React from 'react'
import "./Palette.scss"

export default function Palette() {
	return (
		<div className="palette">
			<button type="button" className="palette__button palette__button--01"></button>
			<button type="button" className="palette__button palette__button--02"></button>
			<button type="button" className="palette__button palette__button--03"></button>
			<button type="button" className="palette__button palette__button--04"></button>
			<button type="button" className="palette__button palette__button--05"></button>
		</div>
	)
}