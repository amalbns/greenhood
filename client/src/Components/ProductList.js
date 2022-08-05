import React,{ useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Spinner} from 'react-bootstrap'
import ProductCard from './ProductCard'
import { getProducts } from '../JS/Actions/product'

const ProductList = ({products , inputSearch}) => {
    const dispatch = useDispatch()
    const listProducts = useSelector((state) => state.productReducer.listProducts)
    const load = useSelector((state) => state.productReducer.load)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div style={{display: 'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
            {/* {products.filter(product => product.name.toUpperCase().includes(inputSearch.toUpperCase()) */}
            {load ? <Spinner animation="border" variant="primary" /> : 
            listProducts.map((el) => <ProductCard product={el} key={el._id}/>)}
        </div>
    )
}

export default ProductList