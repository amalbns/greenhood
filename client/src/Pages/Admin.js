import React from 'react'
import { Card } from 'react-bootstrap'

import { useSelector } from 'react-redux'

const Admin = () => {
    const admin = useSelector ((state) => state.adminReducer.admin)

    return (
        <div className='admin'>
            <h1 style={{color:"white"}}>Admin Profile</h1>
        <Card style={{ width: '18rem' ,marginLeft:"40%",BackgroundColor:"rgb(66, 66, 200)"}}>
        <Card.Body >
        
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5iROb1TgJ_rcl-6r-68v1yjtID052zxSkw&usqp=CAU" />
    
            <Card.Title>{admin && admin.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{admin && admin.email}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{admin&& admin.phone}</Card.Subtitle>
            
            
        </Card.Body>
    </Card>
        </div>
    )
}

export default Admin