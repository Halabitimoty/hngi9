import React from 'react'
import '../Footer/Footer.css'
import I4G from '../../assets/I4G.png'
import Vector from '../../assets/Vector.png'

function Footer() {
  return (
	<div className='footer'>
    <img src={I4G} alt="" className="I4G" />
    <p>HNG Internship 9 Frontend Task</p>
    <img src={Vector} alt="" className="Vector" />
  </div>
  )
}

export default Footer