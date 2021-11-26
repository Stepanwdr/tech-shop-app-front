import {GET_DEVICE, GET_SINGLE_DEVICE, SELECT_DEVICE} from "../actions/devices";


const initialState=[{
    allDevice: {},
    selectedDevice: {},
    singleDevice:{},
    info:{}

}]
export default function reducer(state=initialState,action) {
    switch (action.type) {
        case SELECT_DEVICE: {
            const {device}=action.payload
            console.log(action)
            return {
                ...state,
                selectedDevice:device
            }
        }

        case GET_DEVICE.REQUEST: {
            const {status}=action.payload
            console.log(action,"request")
            return {
                ...state,
                status
            }
        }
        case GET_DEVICE.SUCCESS: {
            const {rows,status}=action.payload.data.allDevices
            console.log(action.payload.data,"success")
            console.log(rows,3333)
            return {
                ...state,
                status,
                allDevice:rows
            }
        }
        case GET_DEVICE.FAIL: {
            const {error}=action.payload.data
            console.log(action,"fail")
            return {
                ...state,
                error
            }
        }

        case GET_SINGLE_DEVICE.REQUEST: {
            const {status}=action.payload
            console.log(action,"request")
            return {
                ...state,
                status
            }
        }
        case GET_SINGLE_DEVICE.SUCCESS: {
            const {singleDevice,device__infos,status}=action.payload.data
            console.log(action.payload.data,"success")
            return {
                ...state,
                status,
                singleDevice,
                info:device__infos
            }
        }




        case GET_SINGLE_DEVICE.FAIL: {
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