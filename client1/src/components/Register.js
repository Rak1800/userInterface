import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState("");
    const [add, setAdd] = useState('');
    const navigate = useNavigate()



    const signUpData = async (e) => {
        e.preventDefault() 
        console.log(name,gender,age, mobile, email, pass,add)
        const res=await axios.post("/register",
    {name: name, gender: gender, age: age, mobile: mobile, email: email, password: pass, address: add })
    console.log(res)
    if(res.data.status){
        alert(res.data.message)
        navigate("/login")
    }
     }
    return (
        <>
            <form className='register'>
                <h1>Register</h1>
                <input className='inputbox' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
                <input className='inputbox' type='text' value={gender} onChange={(e) => setGender(e.target.value)} placeholder='Enter Your Gender' />
                <input className='inputbox' type='text' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter Your Age' />
                <input className='inputbox' type='number' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Enter Your Mobile  number' />
                <input className='inputbox' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
                <input className='inputbox' type='password' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter Your Password' />
                <input className='inputbox' type='text' value={add} onChange={(e) => setAdd(e.target.value)} placeholder='Enter Your Address' />
                <button className='btn' type='button' onClick={signUpData} >Register</button>
                <button className='logbtn' type='button'><Link to="/login">login</Link></button>
            </form>
        </>
    )
}
