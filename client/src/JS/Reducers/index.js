import {combineReducers} from 'redux' 
import userReducer from './user'
import productReducer from './product';
import adminReducer from './admin';
import orderReducer from './order';



const rootReducer = combineReducers({userReducer ,productReducer ,adminReducer,orderReducer}) ;




export default rootReducer