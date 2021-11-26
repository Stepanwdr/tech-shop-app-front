import {GET_TYPES, SELECT_TYPES} from "../actions/types";

const initialState=[{
    allTypes: {},
    selectedType: {}

}]
export default function reducer(state=initialState,action) {
    switch (action.type) {
        case SELECT_TYPES: {
            const {type}=action.payload
            console.log(action)
            return {
                ...state,
                selectedType:type
            }
        }

        case GET_TYPES.REQUEST: {
            const {status}=action.payload
            console.log(action,"request")
            return {
                ...state,
                status
            }
        }
        case GET_TYPES.SUCCESS: {
            const {allTypes,status}=action.payload.data
            console.log(action,"success")
            return {
                ...state,
                status,
               allTypes
            }
        }
        case GET_TYPES.FAIL: {
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