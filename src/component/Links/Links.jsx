import React from 'react'
import '../Links/Links.css'

function links() {
	return (
		<div className='links_btn'>
			<button id='twitter_link'><a href="https://twitter.com/home">Twitter Link</a></button>
			<button id='btn__zuri'><a href="https://training.zuri.team/">Zuri Team</a></button>
			<button id='books'><a href="http://books.zuri.team">Zuri Books</a></button>
			<button id='book__python'><a href="https://books.zuri.team/">Python Books</a></button>
			<button id='pitch'><a href="https://background.zuri.team">Background Check for Coders</a></button>
			<button id='book__design'><a href="https://books.zuri.team/design-rules">Design Books</a></button>
		</div>
	)
}

export default links