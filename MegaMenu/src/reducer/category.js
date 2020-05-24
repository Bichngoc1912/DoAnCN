import { FETCH_CATEGORY } from '../action/category';

const initState = {
    listcategory: {}
}

const category = (state = initState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY:
            return {
                listcategory: action.payload
            }
        default: return state;
    }
}

export default category;