import React from 'react'
import { useState } from 'react';
import "./Form.css";
function Form() {

 const [handle, setHandle] = useState("");
 
 function handleChange()
 {

 }

  return (
	<div className='Formpage'>
		<h3>Contact Me</h3>
		<p>Hi there, contact me to ask me about anything you have in mind.</p>
		<form>
			<div className="user_name">
				<div>
					<label htmlFor="first_name">First name</label>
					<input type="text" name="first_name" id="" onChange={handleChange} placeholder="Enter your first name" />
				</div>
				<div>
					<label htmlFor="last_name">Last name</label>
					<input type="text" name="last_name" id="" onChange={handleChange} placeholder="Enter your last name" />
				</div>
			
			</div>
			<div className='user_details'>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="" onChange={handleChange} placeholder="yourname@email.com"/>
				
				<label htmlFor="message">Message</label>
				<input type="text" name="message" id="" onChange={handleChange} placeholder="Send me a message and I'll reply you as soon as possible..."/>
				
				<div className='user_check'>
					<input type="checkbox" name="check" id="" onChange={handleChange} placeholder=""/>
					<label htmlFor="check">You agree to providing your data to name who may contact you.</label>
				</div>
			</div>

			<input type="submit" value="Send Message" className='submit' />
		</form>
	</div>
  )
}

export default Form