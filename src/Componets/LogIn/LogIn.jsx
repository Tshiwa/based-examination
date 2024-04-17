import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LogIn.css';
import { Link } from 'react-router-dom';
import Validation from '../../Context/LoginValidation';


export const LogIn = () => {
    const [values,setValues] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors,setErrors] = useState({})
    const handleInput =(event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:3000/login', values)
            .then(res => {
                navigate('/user')
            })
            .catch(err => console.log(err));
        }
    }


  return (
    <div className='login'>
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className="mdb--3">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Your Email' name='email' onChange={handleInput} className='from--inp'/>
                {errors.email && <span className='tex--error'>{errors.email}</span>}
            </div>
            <div className="mdb--3">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Your Password' name='password' onChange={handleInput} className='from--inp'/>
                {errors.password && <span className='tex--error'>{errors.password}</span>}
            </div>
            <button type='submit' className='log--in'>Login</button>
            <p>You are agree to our terms and policies</p>
            <Link to='/signup'><button className='btn--account'>Create Account</button></Link>
        </form>
    </div>
  )
}
