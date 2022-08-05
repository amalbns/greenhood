
import axios from 'axios'
import { FAIL_PRODUCTS, GET_PRODUCT, GET_PRODUCTS, LOAD_PODUCTS } from '../ActionTypes/product'



export const getProducts = () => async (dispatch) => {
    dispatch({type: LOAD_PODUCTS})
try {
    let result = await axios.get('/api/products/all')
    dispatch({type: GET_PRODUCTS, payload: result.data })
} catch (error) {
    dispatch({
        type: FAIL_PRODUCTS, payload: error.response
    })
}
}

export const addProduct = (newProduct) => async (dispatch) => {
try {
    const config = {
        headers : { 
            authorization : localStorage.getItem("token")

        }
    }
    await axios.post('/api/products/add', newProduct,config)
    dispatch(getProducts())
} catch (error) {
    dispatch({ type: FAIL_PRODUCTS, payload: error.response})
}
}

export const deleteProduct = (id) => async (dispatch) => {
try {
    await axios.delete(`/api/products/${id}`)
    dispatch(getProducts())
} catch (error) {
    dispatch({ type: FAIL_PRODUCTS, payload: error.response})
}
}
export const editProduct = (id , newProduct) => async (dispatch) => {
    try {
    await axios.put(`/api/products/${id}`,newProduct)
    dispatch(getProducts())
    } catch (error) {
    dispatch({type:FAIL_PRODUCTS,payload:error.response})   
    }
}


export const getOneProduct = (id) => async (dispatch) => {
try {
    let result = await axios.get(`/api/products/${id}`)
    dispatch({type: GET_PRODUCT, payload: result.data})
} catch (error) {
    dispatch({ type: FAIL_PRODUCTS, payload: error.response})
}
}