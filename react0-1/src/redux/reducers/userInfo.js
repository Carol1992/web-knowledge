import {
    GET_USER_INFO,
    CLEAR_USER_INFO
} from 'actions/userInfo';


const initState = {
    userInfo: {}
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload,
            };
        case CLEAR_USER_INFO:
            return {
                ...state,
                userInfo: {}
            }
        default:
            return state;
    }
}