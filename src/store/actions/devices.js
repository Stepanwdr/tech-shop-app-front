import {define} from "../../helpers/redux-request";
import Api from "../../Api";

export const SELECT_DEVICE="SELECT_DEVICE"
export function selectDevice(device) {
    return{
        type:SELECT_DEVICE,
        payload:{
            device
        }
    }
}

export const  GET_DEVICE = define("GET_DEVICE");
export function getDevice() {
    return GET_DEVICE.request(() => Api.getDevice()).takeLatest()
}
export const  GET_SINGLE_DEVICE = define("GET_SINGLE_DEVICE");
export function getSingleDevice(id) {
    return GET_SINGLE_DEVICE.request(() => Api.getSingleDevice(id)).takeLatest()
}

