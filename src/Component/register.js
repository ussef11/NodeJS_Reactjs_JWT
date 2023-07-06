import React, { useState } from 'react'
import AuthService from '../services/auth.service'

const Register = () => {

    const [username , setusername] = useState()
    const [password , setpassword] = useState()
    const [email , setemail] = useState()

    const handleregister = (e)=>{
        e.preventDefault();

        AuthService.register(username , email , password).
        then((response)=>{
            console.log("Register with username " +response.data.message)

        },(error)=>{
            const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            console.log(resMessage)
        }
        )
    }



  return (
    <div>  <h1>Register</h1>
      
    <input  value={username  || ""} onChange={(e)=>{setusername(e.target.value)}} placeholder='username'/>
    <input value={password  || ""} onChange={(e)=>{setpassword(e.target.value)}} placeholder='password' type='password' />
    <input value={email  || ""} onChange={(e)=>{setemail(e.target.value)}} placeholder='password'  />
    <button onClick={handleregister}> Login</button>







</div>
  )
}

export default Register