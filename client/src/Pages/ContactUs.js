import React from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import {GrContact} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import{AiOutlineMail} from 'react-icons/ai'
import{IoStorefrontOutline} from 'react-icons/io5'
import {FiPhoneCall} from 'react-icons/fi'
import {SiHellofresh} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'


const ContactUs = () => {
    return (
        <div>
            <h1 style={{color:"rgb(66, 66, 200",marginTop:"1rem"}}><GrContact/>Contact Us</h1>

            <h2 style={{marginTop:"1.5rem"}}>What can we help you with?</h2>
            <p>If you have any question or comments you can share it with us </p>
            <div>
        
        <FloatingLabel controlId="floatingTextarea2" label="">
            <Form.Control
            as="textarea"
            placeholder="Leave a comment or question here "
            style={{ height: '100px' , width:"800px" ,marginLeft:"24rem" , marginBottom:'3rem' }}
            
            />
            <Link to='/profile'><Button style={{ fontWeight:"bold"}} variant="dark" type="submit" >Send</Button></Link>
        </FloatingLabel>
    
            </div>
            <div className='bar' >
            <h5><SiHellofresh/> You can visit us in our store</h5>
            <h5><IoStorefrontOutline/>Adress: 11 Salah ben Youssef street el Manzah 9 </h5>
            <h5> <FiPhoneCall/>Phone and Whatsapp 92828031<BsWhatsapp/></h5> 
            <h5><AiOutlineMail/>Email: khalilagrebi83@gmail.com</h5>
            </div>
        </div>
    )
    }

export default ContactUs