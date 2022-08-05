import React, { useState } from 'react' ;
import {Navbar,Nav,Container, Button,  NavDropdown} from 'react-bootstrap'

import {VscAccount}from 'react-icons/vsc'

import {CgLogOut}from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../JS/Actions/user';
import {RiAdminLine}from 'react-icons/ri'
import {HiShoppingCart}from 'react-icons/hi'
import {FiUserPlus}from 'react-icons/fi'
import {FaUserAlt}from 'react-icons/fa'


import FilterByName from './FilterByName';



const NavBar = () => {
    
    const isAuth = useSelector(state =>state.userReducer.isAuth)
    const AdminAuth = useSelector(state =>state.adminReducer.AdminAuth)
    const [inputSearch, setInputSearch] = useState("")

    const dispatch =useDispatch()
    return (
        <header >
        
                <Navbar className='navBB'>
        <Container>
        
            
        <Navbar.Brand href="/" style={{color :"white" , fontWeight:"bold" , fontSize :"2.5rem" , fontFamily : "Playfair Display "  }}>GreenHood</Navbar.Brand>
        
        
        
        
        <Nav className="mx-auto" style={{fontWeight:"bold",color:"white"}}>
        <Nav.Link  style={{color :"white",marginTop:"2mm" }} href="/">Home</Nav.Link>
        <Nav.Link  style={{color :"white",marginTop:"2mm" }} href="/products">Products</Nav.Link>
        <Nav.Link  style={{color :"white",marginTop:"2mm" }} href="/contactus">Contact Us</Nav.Link>
    


        
        
        {isAuth ? <Nav.Link  style={{color :"white",marginTop:"2mm" }}   href="/profile">Profile</Nav.Link> :null }
        {AdminAuth ? <Nav.Link  style={{color :"white",marginTop:"2mm" }}  href="/admin">Admin</Nav.Link> :null }
        

        <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch}/>

        </Nav>
        
        <NavDropdown  className="dropdown" title= {< FaUserAlt/>}>
            {
            isAuth ? 
            (<Link to='/'> <Button style={{borderRadius:"2rem"}}  variant="light" onClick={() => dispatch(logout())}><CgLogOut/>LogOut </Button></Link> )
            :
            ( <div >

                <Link  to='/register' ><Button style={{marginLeft:"1rem",}}  variant="light"><FiUserPlus/>Join Us</Button></Link>
                <Link  to='/login' ><Button style={{marginLeft:"1rem"}} variant="light"><VscAccount/>LogIn</Button></Link>
                </div>
            )}
            {
            AdminAuth ? 
            (<Link to='/'> <Button style={{marginLeft:"1rem"}} variant="light" onClick={() => dispatch(logout())}><CgLogOut/>LogOut </Button></Link> )
            
            :
            ( <div >
                <Link  to='/singin' ><Button style={{marginLeft:"1rem"}} variant="light"><RiAdminLine/>Admin</Button></Link>
                </div>
            )}
            </NavDropdown>
            <div className='cart-icon'>
                <span>0</span>
                <Link to="/cart ">
                < HiShoppingCart style={{fontSize:"28",color :"white" }}/>
                </Link>
            </div>
        
        
        

        
        
        </Container>
    </Navbar>

        </header>
    )
    }

export default NavBar