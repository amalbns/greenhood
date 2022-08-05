
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../JS/Actions/user'




const Login = () => {
    const [user, setUser] = useState({})
    

    const dispatch = useDispatch () 
    const navigate = useNavigate()
    
    


    const handleChange = (e) => {
    
        setUser({ ...user,[e.target.name]: e.target.value})
        
    }
    const handleUser= (e)=> {

    
        e.preventDefault();
        dispatch(login(user))
        navigate('/profile')
    }



    return (
        <div className='back'>
            <h1 style={{color:"rgb(66, 66, 200" , fontWeight:"bold",}}>Login</h1>
            <Form.Label style={{color:"white" , }}>Email address</Form.Label>
            <Form.Control type="email" style={{width:"40%",height:"7%",marginLeft:"30%"}} placeholder="Enter email" name="email" onChange={handleChange} />
            <Form.Label style={{color:"white"}}>Password</Form.Label>
            <Form.Control type="password" style={{width:"40%",height:"7%",marginLeft:"30%"}} placeholder="Enter Password" name="password" onChange={handleChange} />
            <br>
            </br><Link to='/profile'><Button style={{color:"rgb(66, 66, 200" , fontWeight:"bold"}} variant="light" type="submit" onClick={handleUser}> Login</Button></Link>

            <br></br>
            <br></br>

        </div>
    )
    } 

export default Login