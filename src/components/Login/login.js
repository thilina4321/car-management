import React from 'react'
import './style.css'
const LoginComponent = () => {
  return (
    <div className='bgC'>
            <div style={{height:'200px'}}></div>

    <div className="box-form" >
       <div className="left">
		<div className="overlay">
		<h1>Car Admin Portal</h1>
		{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Curabitur et est sed felis aliquet sollicitudin</p> */}
		
		</div>
        </div>
        <div className='right'>
		<p>Car Management System. System for change the future in the car management Sri Lanka</p>
		
        <div className="inputs">
			<input type="text" placeholder="user name" />
			<br />
			<input type="password" placeholder="password" />
		</div>

        <div className="remember-me--forget-password">
	
		</div>

        <div style={{height:'50px'}}></div>

        <button style={{width:'100%'}}>Login</button>
        </div>
	</div> 
    </div>


  )
}

export default LoginComponent