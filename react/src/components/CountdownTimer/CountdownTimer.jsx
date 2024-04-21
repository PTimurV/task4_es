import React, { useState, useEffect } from 'react'

const CountdownTimer = () => {
	const [count, setCount] = useState(10)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCount(prevCount => prevCount - 1)
		}, 1000)

		if (count === 0) {
			clearInterval(intervalId)
		}

		return () => clearInterval(intervalId)
	}, [count])

	return (
		<div>
			<h1>{count}</h1>
		</div>
	)
}

export default CountdownTimer
