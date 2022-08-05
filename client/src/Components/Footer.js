import React from 'react'


const Footer = () => {
    return (
        <footer style={{padding:"1rem" , backgroundColor:"rgb(241, 238, 238)" , borderRadius:"5%" ,marginTop:"1rem"}}> 
    


    <a style={{textDecoration:"none",marginRight:"1rem",color :"gray",fontWeight:"bold"}} className='contact' href='/contactus'>Contact Us</a>
    
    <a style={{textDecoration:"none" , color :"gray" ,fontWeight:"bold"}} className='about' href='/aboutus'>About Us</a>
    <h5  >© 2022 - Green Hood | All rights reserved</h5>
    
    
        </footer>
    )
    }

export default Footer