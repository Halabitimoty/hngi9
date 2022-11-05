import React from 'react'
import '../Links/Links.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom';

function links() {
	return (
		<div className='links_btn'>
			<Button id = "twitter_link" refs = "https://twitter.com/home" name = "Twitter Link"/>
			<Button id = "btn__zuri" refs = "https://training.zuri.team/" name = "Zuri Team"/>
			<Button id = "books" refs = "http://books.zuri.team" name = "Zuri Books"/>
			<Button id = "book__python" refs = "https://books.zuri.team/" name = "Python Books"/>
			<Button id = "pitch" refs = "https://background.zuri.team" name = "Background Check for Coders"/>
			<Button id = "book__design" refs = "https://books.zuri.team/design-rules" name = "Design Books"/>
			<button id = "contact"><Link to="/contact">Contact Me </Link></button>
		</div>
	)
}

export default links