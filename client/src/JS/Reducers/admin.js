import { CURRENT_ADMIN, FAIL_ADMIN, LOAD_ADMIN, LOGIN_ADMIN, LOGOUT_ADMIN } from "../ActionTypes/admin"



const initialState = {
    admin:{} ,
    loadAdmin:false,
    errors : [],
    AdminAuth :false 
}

const adminReducer = (state= initialState, {type,payload}) => {
    switch (type) {
        case LOAD_ADMIN: return {...state, loadAdmin : true}
        case  LOGIN_ADMIN:
        localStorage.setItem("token",payload.token)
        return {...state,loadAdmin:false , admin:payload.admin , AdminAuth: true}
        case CURRENT_ADMIN : 
        return {...state,admin:payload , loadAdmin:false , AdminAuth:true}
        case LOGOUT_ADMIN :
            localStorage.removeItem("token")
            return {admin:{},loadAdmin:false,errors:[],AdminAuth:false}
        case FAIL_ADMIN: return {...state , loadAdmin:false,errors:payload}
        default:
            return state
    


            
    }
}
export default adminReducer