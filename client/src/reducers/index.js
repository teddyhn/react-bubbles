import { FETCHING_COLORS_START, FETCHING_COLORS_SUCCESS } from "../actions";
  
const initialState = {
    colors: [],
    isFetching: false,
    error: ""
};
  
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_COLORS_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_COLORS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                colors: action.payload
            };
        default:
            return state;
    }
};