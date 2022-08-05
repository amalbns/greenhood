import React from 'react'

import ProductList from '../Components/ProductList'
import Add from './Add'

const Products = () => {


    return (
        <div>
            <h1 className='productTitle'>OUR FRESH PRODUCTS</h1>
            <ProductList/>
            <Add/>
        </div>
    )
}

export default Products