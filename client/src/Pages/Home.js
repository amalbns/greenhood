import React from 'react';
import {Button, Card, Carousel} from 'react-bootstrap';
import photo from "../Photos/caro4.jpg" ;
import photo1 from "../Photos/caro2.jpg" ;
import photo2 from "../Photos/caro3.jpg";
import { Link } from 'react-router-dom';
import photo3 from "../Photos/S1.png"
import photo4 from "../Photos/S2.png"
import photo5 from "../Photos/S3.png"




const Home = () => {
    return (
        <div>
        <div style={{display:"flex"}}>

    </div>
    <br/>
            <Carousel fade >
    <Carousel.Item className='carousel' >
        <img
        className="d-block w-100"
        src={photo}
        alt="First slide"
        />
        <Carousel.Caption>
        <h1>Buy Groceries Online! Save time and avoid the line! </h1>
    
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carousel'>
        <img
        className="d-block w-100"
        src={photo1}
        alt="Second slide"
        />

        <Carousel.Caption>
        <h1>Enjoy monthly savings on your favourite products!</h1>
        
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carousel'>
        <img
        className="d-block w-100"
        src={photo2}
        alt="Third slide"
        />

        <Carousel.Caption>
        <h1>Live Green Live healthy</h1>
        
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    <h1 className='into'>Get Your Favorite Vegetablesand Fruits Online</h1>
    <div className='gl'>
        
    <Card className="homeCard1" >
        <Card.Body>

        
    
        <Link to="/products"> <button className='vegButton'>Fruits</button></Link>
        
        </Card.Body>
        </Card>
        <Card className="homeCard2" >
        <Card.Body>
    

    <Link to="/products"> <button className='vegButton'> Vegetables</button></Link>
        
        </Card.Body>
        </Card>
        
    </div>
    
    <div className='sub'>
                <h4>Subscribe to our newsletter</h4>
                <p>
                Subscribe to our newsletter and receive information on the latest and lusive offers , order your fresh products .
                You can unsubscribe at any time</p> 
                <Link to="/register"><Button variant="secondary"> Subscribe</Button>{' '}</Link> 
                </div>
                
                    <h1  className='into1' >Our Services</h1>
                    <div className='servi'>
                    <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"  src={photo3} alt="pic"/>
            <Card.Body>
                <Card.Title>Fresh products</Card.Title>
                <Card.Text>
                Not only a great theme, but the customer support is absolutely excellent.
                </Card.Text>
                
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={photo4} alt="pic" />
        <Card.Body>
            <Card.Title>24 hour delivery</Card.Title>
            <Card.Text>
            You ll get your order in short time. Business Days are Monday through Saturday. They do not include Sundays and public holidays.
            </Card.Text>
        
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={photo5} alt="pic" />
        <Card.Body>
            <Card.Title>Cash on delivery</Card.Title>
            <Card.Text>
            Payment is made in cash on delivery.Be sure to prepare the exact amount of the order. Delivery people don't always have cash to give you change.

            </Card.Text>
            
        </Card.Body>
        </Card>
                </div>
        </div>
                
    )
}

export default Home