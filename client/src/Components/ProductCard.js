import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteProduct } from '../JS/Actions/product'
import {BsCartPlus} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'



const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const admin = useSelector(state=>state.adminReducer.admin)

return (
    <div className="cardPage">


        <Card className='productsCard'>
    <Card.Img className='card-image ' variant="top" src={`uploads/${product.image}`} width='75%' />
    <Card.Body className='card-body '>
        <Card.Title style={{fontWeight:"bolder",color:" rgb(66, 66, 200)"}}>{product.name}</Card.Title>
        <Card.Text style={{color:"rgb(150, 146, 146)",display:"flex",justifyContent:"space-around"}}>{product.description}</Card.Text>
    
        <Card.Text style={{color:"rgb(150, 146, 146)",display:"flex",justifyContent:"space-around"}}>{product.category}</Card.Text>
        <Card.Text style={{color:"crimson",fontWeight:"bold",display:"flex",justifyContent:"space-around"}}>{product.price} DT</Card.Text>
        
        { ( admin && admin._id === product.id_admin)
        ?
        <Button variant="outline-success" className='addmin-button'  onClick={()=>navigate(`/edit/${product._id}`)}><AiFillEdit/>Edit</Button>
        : null
        }
        { ( admin && admin._id === product.id_admin)
        ?
        <Button variant="outline-success" className='admin-button'   onClick={() => dispatch(deleteProduct(product._id))}><AiFillDelete/>Delete</Button>
        : null
        }
            <Link to="/cart">  <Button variant="outline-success" className='add-button'  ><BsCartPlus/>  ADD TO CART  </Button></Link>

        
        </Card.Body>
</Card>
    </div>
)
}

export default ProductCard