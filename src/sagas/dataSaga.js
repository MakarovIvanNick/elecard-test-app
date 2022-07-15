import {call, put, takeLatest} from 'redux-saga/effects';
import {get} from "../services/http";
import {GET_DATA_ASYNC} from "../store/types";
import {getDataSuccess, loadingData, loadingError} from "../store/actions";

export function* getDataWorker() {
    try {
        yield put(loadingData());
        const response = yield call(get);
        yield put(getDataSuccess(response));
    } catch (e) {
        console.log(e)
        yield put(loadingError(e));
    }
}

export function* dataWatcher() {
    yield takeLatest(GET_DATA_ASYNC, getDataWorker);
}
