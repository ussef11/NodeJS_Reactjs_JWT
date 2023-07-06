import React, { useState } from 'react'
import AuthService from '../services/auth.service'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();

    const [username , setusername] = useState()
    const [password , setpassword] = useState()

    const handlelogin = (e)=>{
        e.preventDefault()
        AuthService.login(username, password).then(
            ()=>{
                alert("login with username " +username+ " "+password)
                navigate("/admin")
            },
            (error)=>{
                const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
                console.log(resMessage)
            }
        )

            console.log(username , password)
       
        
    }



  return (
    <div>  <h1>Login</h1>
      
            <input  value={username  || ""} onChange={(e)=>{setusername(e.target.value)}} placeholder='username'/>
            <input value={password  || ""} onChange={(e)=>{setpassword(e.target.value)}} placeholder='password' type='password' />
            <button onClick={handlelogin}> Login</button>
            <Link to={"/Register"}>Register</Link>

       

  



    </div>
  )
}

export default Login