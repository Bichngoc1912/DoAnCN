import Axios from 'axios';
export const FETCH_CATEGORY = "FETCH_CATEGORY";

const api = 'http://localhost:8080/itdlu/wp-json/wp/v2/categories';

export const fetchCategory = (payload) => {
    return {
        type: FETCH_CATEGORY,
        payload
    }
};

export const fetchAllCategory = () => {
    return (dispatch) => {
        return Axios.get(api).then(response => {
            dispatch(fetchCategory(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};