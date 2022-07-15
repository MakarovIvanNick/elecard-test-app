import {DELETE_CARD, GET_DATA_SUCCESS, LOADING_DATA, LOADING_ERROR, RESTORE_DATA, SET_FILTER} from "./types";
import {sortByFilter} from "../utils/utils";

const initialState = {
    data: [],
    dataByCategory: {},
    loading: false,
    error: null,
};

export const reducerData = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true,
            }
        case GET_DATA_SUCCESS:
            const payloadData = action.payload;
            let categories = {};
            payloadData.forEach(item => {
                item.image = 'http://contest.elecard.ru/frontend_data/' + item.image;
                if(!categories[item.category]){
                    categories[item.category] = [];
                }
                categories[item.category].push(item);
            });
            localStorage.setItem('initialData', JSON.stringify(categories));
            const deleted = JSON.parse(localStorage.getItem('deletedData'));
            if (!deleted) {
                localStorage.setItem('deletedData', JSON.stringify(categories));
            } else {
                categories = deleted;
            }
            return {
                ...state,
                loading: false,
                data: payloadData,
                dataByCategory: categories,
                error: null,
            }
        case SET_FILTER:
            const filter = action.payload;
            const sortedData = sortByFilter(filter, state.dataByCategory);
            return {
                ...state,
                dataByCategory: sortedData,
            }
        case DELETE_CARD:
            const {category, img} = action.payload;
            const temp = state.dataByCategory[category].filter(item => item.image !== img);
            const newData = state.dataByCategory;
            newData[category] = temp;
            localStorage.setItem('deletedData', JSON.stringify(newData));
            return {
                ...state,
                dataByCategory: JSON.parse(localStorage.getItem('deletedData')),
            }
        case RESTORE_DATA:
            localStorage.setItem('deletedData', localStorage.getItem('initialData'));
            return {
                ...state,
                dataByCategory: JSON.parse(localStorage.getItem('initialData')),
            }
        case LOADING_ERROR:
            console.log(action.payload)
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
