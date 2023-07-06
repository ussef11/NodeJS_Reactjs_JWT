import React, { useEffect, useState } from 'react'
import UserService from '../services/user.service'

const Admin = () => {

  
    const[content  , setcontent] = useState()

    useEffect(()=>{
        UserService.getAdminBoard().then((res)=>{
            setcontent(res.data)
        },(error)=>{
            const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          setcontent(_content)
          window.location.href = "/login"
        })
    },[])

  return (
    <div>{content}</div>
  )
}

export default Admin