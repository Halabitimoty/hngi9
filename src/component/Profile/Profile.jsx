import React from 'react'
import '../Profile/Profile.css'
import img from '../../assets/profileImg.jpg'

function Profile() {
	return (
		<div className='profile'>
			<img src={img} alt="" id="profile_img" />
			<div id="twitter">twiiter</div>
			<div id="slack">slack</div>
		</div>
	)
}

export default Profile