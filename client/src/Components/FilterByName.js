import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {BiSearchAlt} from 'react-icons/bi'

const FilterByName = ({inputSearch , setInputSearch}) => {
return (
    <div className='search'>
        <Form.Control style={{width:"11rem",marginTop:"3mm",marginLeft:"7rem",height:"2rem"}} type="text" placeholder="Search Products..."
        onChange={(e) => setInputSearch (e.target.value)}
        value={inputSearch} /> <Button style={{display:"flex",marginTop:"3mm" ,backgroundColor:"white", color:"black",height:"2rem" }}><BiSearchAlt/></Button> 
    </div>
)
}

export default FilterByName