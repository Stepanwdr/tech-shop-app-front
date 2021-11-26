import Api from "../../Api";
import {define} from "../../helpers/redux-request";



export const SET_IS_OUT="SET_IS_OUT"
export function setIsOut(isAuth){
    return{
        type:SET_IS_OUT,
        payload:{
            isAuth
        }
    }
}


export const  USER_REGISTER = define("USER_REGISTER");
export function registration(email,password) {
    return USER_REGISTER.request(() => Api.registration(email,password)).takeLatest()
}
export const  USER_LOGIN = define("USER_LOGIN");
export function login(email,password) {
    return USER_LOGIN.request(() => Api.login(email,password)).takeLatest()
}
export const AUTH_CHECK=define("AUTH_CHECK")
export function authCheck(){
    return AUTH_CHECK.request(() => Api.authCheck()).takeLatest()
}