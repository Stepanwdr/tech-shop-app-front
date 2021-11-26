import {define} from "../../helpers/redux-request";
import Api from "../../Api";

export const SELECT_BRAND="SELECT_BRAND"
export function selectBrand(brand) {
    return{
        type:SELECT_BRAND,
        payload:{
            brand
        }
    }
}

export const  GET_BRANDS = define(" GET_BRANDS");
export function getBrands() {
    return  GET_BRANDS.request(() => Api.getBrands()).takeLatest()
}


