import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import LoginComponent from '../components/Login/login'

const Login = () => {
  const user = localStorage.getItem("car-admin-user")
  const router = useHistory()
  console.log(user);
  useEffect(()=>{
    if(user){
      router.replace('/admin/user')
    }
  } , [user])

  return (
    <div>
        <LoginComponent />
    </div>
  )
}

export default Login