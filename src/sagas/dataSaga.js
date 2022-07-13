import {call, put, takeLatest} from 'redux-saga/effects';
import {get} from "../services/http";
import {GET_DATA_ASYNC} from "../store/types";
import {getDataSuccess} from "../store/actions";

export function* getDataWorker() {
    try {
        const response = yield call(get);
        yield put(getDataSuccess(response));
    } catch (e) {
        console.log('getDataWorker error ->', e);
    }
}

export function* dataWatcher() {
    yield takeLatest(GET_DATA_ASYNC, getDataWorker);
}
