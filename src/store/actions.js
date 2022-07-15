import {
    DELETE_CARD,
    GET_DATA_ASYNC,
    GET_DATA_SUCCESS,
    LOADING_DATA,
    LOADING_ERROR,
    RESTORE_DATA,
    SET_FILTER
} from "./types";

export const getDataAsync = () => {
    return {
        type: GET_DATA_ASYNC,
    }
}

export const loadingData = () => {
    return {
        type: LOADING_DATA,
    }
}

export const getDataSuccess = (payload) => {
    return {
        type: GET_DATA_SUCCESS,
        payload,
    }
}

export const setFilters = (payload) => {
    return {
        type: SET_FILTER,
        payload,
    }
}

export const deleteCard = (payload) => {
    return {
        type: DELETE_CARD,
        payload,
    }
};

export const restoreData = () => {
    return {
        type: RESTORE_DATA,
    }
}

export const loadingError = (payload) => {
    return {
        type: LOADING_ERROR,
        payload,
    }
}
