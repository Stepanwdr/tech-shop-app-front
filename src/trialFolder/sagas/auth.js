import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL } from "../actions/auth";
import { takeLatest, call, put } from 'redux-saga/effects'
import Api from "../../Api";


export default function* watcher() {
  yield takeLatest(AUTH_REQUEST, authPerson)
}

function* authPerson(action) {
  try {
    const { query } = action.payload;
    const { data } = yield call(Api.auth, query);
    yield put({
      type: AUTH_SUCCESS,
      payload: {
        data: data,
      }
    })

  } catch (e) {
    console.warn(e);
    yield put({
      type: AUTH_FAIL,
      message: e.message,
    })
  }
}
