import { FETCH_POST } from '../action/post';

const initState = {
    listpost: null
}

const posts = (state = initState, action) => {
    switch (action.type) {
        case FETCH_POST:
            return {
                listpost: action.payload
            }
        default: return state;
    }
}

export default posts;