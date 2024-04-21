import React from 'react'
import './User.css'

const User = ({ user }) => {
	return (
		<li className='user-item'>
			<div className='user-info'>
				<div className='user-name'>
					Имя: {user.name} {user.username}
				</div>
				<div className='user-address'>Город: {user.address.street}</div>
				<div className='user-phone'>Телефон: {user.phone}</div>
				<div className='user-website'>Веб сайт: {user.website}</div>
			</div>
		</li>
	)
}

export default User
