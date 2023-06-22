import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
    let auth = localStorage.getItem("users")
    const navigate = useNavigate()
  
    
    let logout = () => {
      localStorage.clear()
      navigate('/register')
    }
  
    return (
      <div >
       
        {auth ?
          <ul className='nav'>
            <li><Link to="/">Dashboard</Link></li>
            <li className='logout-right'><Link onClick={logout} to="/login">Logout ({JSON.parse(auth).data.name})</Link></li>
          </ul> :
          <ul className='nav nav-right' >
            <li><Link to="/register">Register</Link></li>
          </ul>}
      </div>
    )
}
