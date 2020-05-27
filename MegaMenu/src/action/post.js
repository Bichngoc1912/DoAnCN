import Axios from 'axios';
export const FETCH_POST = "FETCH_POST";

const api = 'http://localhost:8080/itdlu/wp-json/wp/v2/posts';

export const fetchPost = (payload) => {
    return {
        type: FETCH_POST,
        payload
    }
};

export const fetchAllPost = () => {
    return (dispatch) => {
        return Axios.get(api).then(response => {
            dispatch(fetchPost(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};