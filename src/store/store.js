import {applyMiddleware, combineReducers, createStore} from "redux";
import saga, {rootSaga} from "../sagas/rootSaga";
import {reducerData} from "./reducer";

const rootReducer = combineReducers({
    data: reducerData,
})

const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(rootSaga);
export default store;
