import {GET_DATA_SUCCESS} from "./types";

const initialState = {
    data: [],
    dataByCategory: {},
    loading: false,
    error: null,
};

export const reducerData = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            const payloadData = action.payload;
            let categories = {};
            payloadData.forEach(item => {
                if(!categories[item.category]){
                    categories[item.category] = [];
                }
                categories[item.category].push(item);
            });
            return {
                ...state,
                loading: false,
                data: payloadData,
                dataByCategory: categories,
            }
        default:
            return state;
    }
}
