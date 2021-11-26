import {all, fork} from 'redux-saga/effects';
import auth from './auth';

export default function* watchers() {
    yield all([
        auth
    ].map(fork))
}
