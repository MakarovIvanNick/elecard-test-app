import createSagaMiddleware from 'redux-saga';
import {all, spawn} from 'redux-saga/effects';
import {dataWatcher} from "./dataSaga";

const saga = createSagaMiddleware();

export function* rootSaga() {
    const sagas = [dataWatcher];
    yield all(sagas.map(s => spawn(s)));
}

export default saga;
