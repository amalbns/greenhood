import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  useMatch, useNavigate } from 'react-router-dom'
import { editProduct, getOneProduct } from '../JS/Actions/product'

const Edit = () => {
    const dispatch = useDispatch()
    const [newProduct, setNewProduct] = useState({})
    const productToGet = useSelector(state => state.productReducer.productToGet)
    const match = useMatch("/edit/:id")
    const navigate = useNavigate()
    const handleChange = (e) => {
        setNewProduct ({...newProduct,[e.target.name]: e.target.value})
    }

    useEffect(() => {
        dispatch(getOneProduct(match.params.id,newProduct))
    
    })
    const handleEdit = () => {
        dispatch(editProduct(match.params.id,newProduct))
        navigate(-1)
    }
    
    return (
        <div>
            <h1  style={{color:"rgb(66, 66, 200" , fontWeight:"bold", marginTop:"2rem"}}>Edit product</h1>
            <Form.Label  style={{color:"rgb(66, 66, 200" , fontWeight:"bold",  marginTop:"2rem"}}>Name</Form.Label>
            <Form.Control style={{width:"40%",height:"7%",marginLeft:"30%"}} type="text" placeholder={`${productToGet.name}`} name="name" value={newProduct.name} onChange={handleChange}/>
        
            <Form.Label  style={{color:"rgb(66, 66, 200" , fontWeight:"bold",}}>description</Form.Label>
            <Form.Control style={{width:"40%",height:"7%",marginLeft:"30%"}} type="text" placeholder={`${productToGet.description}`} name="description" value={newProduct.description} onChange={handleChange}/>
        
            <Form.Label  style={{color:"rgb(66, 66, 200" , fontWeight:"bold",}}>category</Form.Label>
            <Form.Control style={{width:"40%",height:"7%",marginLeft:"30%"}} type="text" placeholder={`${productToGet.category}`}name="category" value={newProduct.category} onChange={handleChange}/>
        
            <Form.Label  style={{color:"rgb(66, 66, 200" , fontWeight:"bold",}}>Price</Form.Label>
            <Form.Control style={{width:"40%",height:"7%",marginLeft:"30%"}} type="text" placeholder={`${productToGet.price}`} name="price" value={newProduct.price} onChange={handleChange}/>
        
            <br></br>
            <Button className='bouton' variant="success" type="submit" onClick={handleEdit}>Edit Product</Button>
            

        </div>
    )
    }

export default Edit