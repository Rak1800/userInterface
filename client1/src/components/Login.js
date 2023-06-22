import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()
  
   
    const loginData = async () => {
      let objectData = { email: email, password: pass }
      let result = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(objectData),
        headers: {
          "content-type": "application/json"
        }
      })
      result = await result.json()
      console.log(result)
      if (result) {
        localStorage.setItem("users", JSON.stringify(result))    
        alert(`${result.message}`)
        navigate("/")
      } else {
        alert("user not Found")   
      }
    }
    return ( 
      <div>
        <form className='register'>
          <h1>Login</h1>
          <input className='inputbox' type='email' value={email } placeholder='Enter email '
            onChange={(e) => setEmail(e.target.value)} />
           <input className='inputbox' type="password" value={pass} placeholder='Enter password'
            onChange={(e) => setPass(e.target.value)} />
            <button className='forgot' type='button'>forgot password</button><br></br>
          <button className='btn' type='button' onClick={loginData} >Login</button>
          <button className='logbtn' type='button'><Link to="/register">Create Account</Link></button>
        </form>
      </div>
    )
}

export default Login