import axios from 'axios'
import { CURRENT_ADMIN, FAIL_ADMIN, LOAD_ADMIN, LOGIN_ADMIN, LOGOUT_ADMIN } from '../ActionTypes/admin'



export const signin = (admin) => async (dispatch) => {

    dispatch({type:LOAD_ADMIN})
    try {
        
        let result = await axios.post('/api/admin/login',admin)
        dispatch ({type: LOGIN_ADMIN , payload:result.data})
        
        
        
    } catch (error) {
        dispatch({ type:FAIL_ADMIN, payload:error.response.data.errors})
        
    }
}
export const currentAdmin = () => async (dispatch) => {
    try {
        const config = {
            headers : {
                authorization : localStorage.getItem("token")
            }
        }
        let result = await axios.get('/api/admin/current', config)
        dispatch ({type: CURRENT_ADMIN , payload:result.data})
    } catch (error) {
        dispatch ({type :FAIL_ADMIN, payload: error.response.data.errors})
    }
}

export const logout = ()=> async (dispatch) => {
    dispatch({type:LOGOUT_ADMIN})
}