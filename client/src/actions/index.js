import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCHING_COLORS_START = "FETCHING_COLORS_START";
export const FETCHING_COLORS_SUCCESS = "FETCHING_COLORS_SUCCESS";
export const FETCHING_COLORS_FAILURE = "FETCHING_COLORS_FAILURE";

export const getColors = () => dispatch => {
    dispatch({ type: FETCHING_COLORS_START });
    axiosWithAuth()
        .get('/colors')
        .then(res => {
            dispatch({ type: FETCHING_COLORS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_COLORS_FAILURE, payload: err.data });
        });
};
