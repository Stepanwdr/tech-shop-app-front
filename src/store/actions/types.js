import {define} from "../../helpers/redux-request";
import Api from "../../Api";

export const SELECT_TYPES="SELECT_TYPES"
export function selectType(type) {
    return{
        type:SELECT_TYPES,
        payload:{
            type
        }
    }
}

export const  GET_TYPES = define("GET_TYPES");
export function getTypes() {
    return GET_TYPES.request(() => Api.getTypes()).takeLatest()
}

