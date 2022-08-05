import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addProduct } from '../JS/Actions/product'

const Add = () => {
    const [newProduct, setNewProduct] = useState({})
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setNewProduct ({...newProduct,[e.target.name]: e.target.value})
    }
    const AdminAuth = useSelector(state =>state.adminReducer.AdminAuth)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [file,setFile] = useState(null)


        const handlePhoto = (e) => {
            setFile (e.target.files[0])
        }


    const navigate= useNavigate()

        const handleADD = (e) => {
            e.preventDefault()

        let data = new FormData()
        data.append("name",newProduct.name)
        data.append("description",newProduct.description)
        data.append("category",newProduct.category)
        data.append("price",newProduct.price)
        
        
        data.append("image",file)

        dispatch(addProduct(data)) 
        handleClose()
        navigate("/products")
        
        }

    return (
        <div className='add'>
            {AdminAuth ?  <Button onClick={handleShow} style={{marginTop:"2rem",padding:"1rem" , borderRadius:"2rem" }} variant="success" >Add Product</Button> :null}


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title style={{fontWeight:"bolder",color:" rgb(66, 66, 200)" ,marginLeft:"10rem"}}>Add Product </Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{fontWeight:"bolder"}} >
        <Form.Label >Product Name</Form.Label>
        <Form.Control type="text"  placeholder="Enter your Name" name="name" value={newProduct.name} onChange={handleChange}/>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter your Description" name="description" value={newProduct.description} onChange={handleChange}/>
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter your Category" name="category" value={newProduct.category} onChange={handleChange}/>
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter your Price" name="price" value={newProduct.price} onChange={handleChange}/>
        <Form.Label>Image</Form.Label>
        <Form.Control encType="multipart/form-data"  type="file" onChange={handlePhoto} />
        </Modal.Body>
        <Modal.Footer>
        <Button style={{marginTop:"2rem",padding:"4mm" , borderRadius:"1rem" }} variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Link to='/products'><Button style={{marginTop:"2rem",padding:"4mm" , borderRadius:"1rem" }}  className='bouton' variant="success" type="submit" onClick={ handleADD }>Add Product</Button></Link>
        </Modal.Footer>
        </Modal>
            
            </div>
        
    )
}

export default Add