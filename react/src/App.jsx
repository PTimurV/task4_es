import { useState } from 'react'
import './App.css'
import CountdownTimer from './components/CountdownTimer/CountdownTimer'
import UserList from './components/UserList/UserList'
import WindowSize from './components/WindowSize/WindowSize'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>
				<CountdownTimer />
				<UserList />
				<WindowSize />
			</div>
		</>
	)
}

export default App
