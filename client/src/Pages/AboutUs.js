import React from 'react'
import { Card } from 'react-bootstrap'
import caro from '../Photos/caro6.jpg'


const AboutUs = () => {
    return (
        <div >
            <h1 className="aboutus">About Us</h1>

        
            
            <Card className='aboutP'>
        <Card.Body>Reliance Fresh and Smart makes your grocery shopping even simpler. No more hassles of sweating it out in crowded markets, grocery shops and supermarkets - now shop from the comfort of your home , office or on the move.
We offer you convenience of shopping everything that you need for your home - be it fresh fruits and  vegetables  from a single virtual store.</Card.Body>
    </Card>
    <img src={caro} alt="pic"/>
    
            


        </div>
    )
}

export default AboutUs