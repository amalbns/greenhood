
import axios from 'axios'
import { FAIL_ORDERS, GET_ORDER, GET_ORDERS, LOAD_ORDERS } from '../ActionTypes/order'




export const getOrders = () => async (dispatch) => {
    dispatch({type: LOAD_ORDERS})
try {
    let result = await axios.get('/api/order/all')
    dispatch({type: GET_ORDERS, payload: result.data })
} catch (error) {
    dispatch({
        type: FAIL_ORDERS, payload: error.response
    })
}
}

export const addOrder = (newOrder) => async (dispatch) => {
try {
    await axios.post('/api/order/add', newOrder)
    dispatch(getOrders())
} catch (error) {
    dispatch({ type: FAIL_ORDERS, payload: error.response})
}
}

export const deleteOrder = (id) => async (dispatch) => {
try {
    await axios.delete(`/api/order/${id}`)
    dispatch(getOneOrder())
} catch (error) {
    dispatch({ type: FAIL_ORDERS, payload: error.response})
}
}
export const editOrder = (id , newOrder) => async (dispatch) => {
    try {
    await axios.put(`/api/order/${id}`,newOrder)
    dispatch(getOrders())
    } catch (error) {
    dispatch({type:FAIL_ORDERS,payload:error.response})   
    }
}


export const getOneOrder = (id) => async (dispatch) => {
try {
    let result = await axios.get(`/api/order/${id}`)
    dispatch({type: GET_ORDER, payload: result.data})
} catch (error) {
    dispatch({ type: FAIL_ORDERS, payload: error.response})
}
}