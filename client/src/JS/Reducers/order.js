import { FAIL_ORDERS, GET_ORDER, GET_ORDERS, LOAD_ORDERS } from "../ActionTypes/order"




const initialState = {
    listOrders:[],
    errors: null,
    load: false,
    orderToGet:{}
}


const orderReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case LOAD_ORDERS: return { ...state, load: true }
        case GET_ORDERS: return { ...state, load: false , listOrders: payload.listOrders}
        case FAIL_ORDERS: return { ...state, load: false, errors:payload }
        case GET_ORDER: return { ...state, order: payload.orderToGet }
        default:
            return state;
    }
}

export default orderReducer