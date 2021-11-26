import {GET_TYPES, SELECT_TYPES} from "../actions/types";
import {GET_BRANDS, SELECT_BRAND} from "../actions/brands";

const initialState=[{
    allBrands: {},
    selectedBrand: {},
    status:{}
}]
export default function reducer(state=initialState,action) {
    switch (action.type) {
        case SELECT_BRAND: {
            const {brand}=action.payload
            console.log(action)
            return {
                ...state,
                selectedBrand:brand
            }
        }

        case GET_BRANDS.REQUEST: {
            const {status}=action.payload
            console.log(action,"request")
            return {
                ...state,
                status
            }
        }
        case GET_BRANDS.SUCCESS: {
            const {status}=action.payload
            const {allBrands}=action.payload.data
            console.log(action,"success")
            return {
                ...state,
                status,
                allBrands
            }
        }
        case GET_BRANDS.FAIL: {
            const {error}=action.payload.data
            console.log(action,"fail")
            return {
                ...state,
                error
            }
        }

        default: {
            return state
        }
    }
}