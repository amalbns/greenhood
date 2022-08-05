import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../JS/Actions/user'
import {useDispatch} from 'react-redux'

const Register = () => {
    const [newUser, setNewUser] = useState ({})
    const dispatch = useDispatch ()
    const navigate =useNavigate()

    const handleChange = (e) => {
        setNewUser ({...newUser,[e.target.name]: e.target.value})
    }
const handleUser = (e)=> {
    e.preventDefault();
    dispatch(register(newUser))
    navigate('/profile')
}
    return (
        <div className='back'>
            <h1 style={{color:"rgb(66, 66, 200" , fontWeight:"bold",}}>Join Us</h1>

            <Form style={{color:"white"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>name</Form.Label>
            <Form.Control style={{width:"40%",height:"7%",marginLeft:"30%"}} type="text" placeholder="Enter Name"   name="name" onChange={handleChange}/>
            <Form.Label>Email address</Form.Label>
            <Form.Control style={{width:"40%",height:"7%",marginLeft:"30%"}} type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
            <Form.Label>Phone</Form.Label>
            <Form.Control style={{width:"40%",height:"7%",marginLeft:"30%"}}  type="number" placeholder="Enter phone" name="phone" onChange={handleChange} />
            <Form.Label>Password</Form.Label>
            <Form.Control style={{width:"40%",height:"7%",marginLeft:"30%"}} type="password" placeholder="Password" name="password" onChange={handleChange} />
            
            
        </Form.Group>
        <Link to='/profile'><Button style={{color:"rgb(66, 66, 200" , fontWeight:"bold"}} variant="light" type="submit" onClick={handleUser}>Register</Button></Link>
        </Form>
        <br></br>
        <br></br>
        
        <h4 style={{color:"white"}}> do you have an account?
            <a style={{textDecoration:"none" }} href='/login'>Log In</a>
                    </h4>
        </div>
    )
    }

export default Register