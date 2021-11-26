import {BASKET_REQUEST, BASKET_SUCCESS, BASKET_FAIL} from "../actions/basket";
const initialState = {
    basketDevices: [],
    voterRequestStatus: '',
}
export default function reducer(state= initialState, action) {
    switch(action.type){
        case BASKET_REQUEST: {
            return{
                ...state,
                voterRequestStatus: 'request',
            }
        }
        case BASKET_SUCCESS: {
            return {
                ...state,
                basketDevices: action.payload.data
            }
        }
        case BASKET_FAIL: {
            return {
                ...state,
                basketRequestStatus: 'fail'
            }
        }
        default: {
            return state
        }
    }
}
