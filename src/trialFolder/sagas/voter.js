import {VOTER_REQUEST, VOTER_SUCCESS, VOTER_FAIL} from "../actions/voter";
import { takeLatest, call, put } from 'redux-saga/effects'
import Api from "../../Api";


export default function* watcher() {
    yield takeLatest(VOTER_REQUEST, authPerson)
}
function* authPerson(action){
    try{
        const {query} =action.payload;
        const { data } = yield  call(Api.auth, query);
        yield put({
            type: VOTER_SUCCESS,
            payload: {
                data: data[1],
            }
        })

    }catch (e) {
        console.warn(e);
        yield put({
            type: VOTER_FAIL,
            message: e.message,
        })
    }
}
