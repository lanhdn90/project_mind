import {
    GET_USER_INFO_SUCCESS,
    CHECK_USER_FAIL
} from '../constants';

const initialState = {
    userInfo: {},
    error: "",
};

function userReducer (state = initialState, action ){
    switch (action.type) {
        case GET_USER_INFO_SUCCESS:
            return{
                ...state,
                userInfo: {...action.payload},
                error: ""
            }
        case CHECK_USER_FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:{
            return state;
        }
    }
}

export default userReducer;