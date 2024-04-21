import React, { useState, useEffect } from 'react'
import './UserList.css'
import User from './User'

const UserList = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => setUsers(data))
	}, [])

	return (
		<div>
			<h1>Список пользователей</h1>
			<ul className='user-list'>
				{users.map(user => (
					<User user={user} key={user.id} />
				))}
			</ul>
		</div>
	)
}

export default UserList
