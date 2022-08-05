import { FAIL_PRODUCTS, GET_PRODUCT, GET_PRODUCTS, LOAD_PODUCTS } from "../ActionTypes/product"

const initialState = {
    listProducts:[],
    errors: null,
    load: false,
    productToGet:{}
}


const productReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case LOAD_PODUCTS: return { ...state, load: true }
        case GET_PRODUCTS: return { ...state, load: false , listProducts: payload.listProducts}
        case FAIL_PRODUCTS: return { ...state, load: false, errors:payload }
        case GET_PRODUCT: return { ...state, product: payload.productToGet }
        default:
            return state;
    }
}

export default productReducer