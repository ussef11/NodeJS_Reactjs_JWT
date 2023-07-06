import React, { useEffect, useState } from 'react'
import AuthService from '../services/auth.service'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    let navigate = useNavigate()

    const currentuser = AuthService.getCurrentUser()
    const  [showProfile , setshowProfile] = useState(false)

        if(currentuser == null ){
            window.location.href = "/login"
           console.log("currentuser" , currentuser)
        }
        
        useEffect(()=>{
            if(currentuser != null ){
                setshowProfile(true)
            }
            
        },[])

  return (
    <> 
    { showProfile ? <div className="container">
    <header className="jumbotron">
      <h3>
        <strong>{currentuser.username}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong> {currentuser.accessToken.substring(0, 20)} ...{" "}
      {currentuser.accessToken.substr(currentuser.accessToken.length - 20)}
    </p>
    <p>
      <strong>Id:</strong> {currentuser.id}
    </p>
    <p>
      <strong>Email:</strong> {currentuser.email}
    </p>
    <strong>Authorities:</strong>
    <ul>
      {currentuser.roles &&
        currentuser.roles.map((role, index) => <li key={index}>{role}</li>)}
    </ul>
  </div> :
   <h1>Please Login</h1>}
  </>
  )
}

export default Profile