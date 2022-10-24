import { httpRequest } from 'http/Http'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'
const LoginComponent = () => {

  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useHistory()

  const login = async()=>{

    // add default login
    localStorage.setItem("car-admin-user", "default_login")
    router.push('/admin/user')
    return;

    setIsLoading(true)
    const request = await httpRequest({url:'admin/login', method:'post', data : {email,password}})
    setIsLoading(false)

    if(request.success){
      localStorage.setItem("car-admin-user", request.data)
      router.push('/admin/user')
    }
  }
  return (
    <div className='bgC'>
            <div style={{height:'200px'}}></div>

    <div className="box-form" >
       <div className="left">
		<div className="overlay">
		<h1>Car Admin Portal</h1>
		
		
		</div>
        </div>
        <div className='right'>
		<p>Car Management System. System for change the future in the car management Sri Lanka</p>
		
        <div className="inputs">
			<input type="text" placeholder="user name" value={email} onChange={(e)=>setemail(e.target.value)} />
			<br />
			<input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
		</div>

        <div className="remember-me--forget-password">
	
		</div>

        <div style={{height:'50px'}}></div>

        <button onClick={login} style={{width:'100%'}}>{isLoading ? "Please wait ..." : "Login"}</button>
        </div>
	</div> 
    </div>


  )
}

export default LoginComponent