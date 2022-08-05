import React from 'react'
import { Card } from 'react-bootstrap'

import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector ((state) => state.userReducer.user)

    return (
    <div className='admin'>
        <h1 style={{color:"white"}}>User Profile</h1>
        <Card style={{ width: '18rem' ,marginLeft:"40%",BackgroundColor:"rgb(66, 66, 200)"}}>
        <Card.Body >
        
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5iROb1TgJ_rcl-6r-68v1yjtID052zxSkw&usqp=CAU" />
    
            <Card.Title>{user && user.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{user && user.email}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{user && user.phone}</Card.Subtitle>
            
            
        </Card.Body>
    </Card>
    
    </div>
    )
}

export default Profile