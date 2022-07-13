import {GET_DATA_ASYNC, GET_DATA_SUCCESS} from "./types";

export const getDataAsync = () => {
    return {
        type: GET_DATA_ASYNC,
    }
}

export const getDataSuccess = (payload) => {
    return {
        type: GET_DATA_SUCCESS,
        payload,
    }
}
