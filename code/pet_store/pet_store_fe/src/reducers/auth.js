import {
AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT
} from "../actions/types";

import {updateObject} from "../utils";

const initialState = {
    token: localStorage.getItem('token'),
    user:  JSON.parse(localStorage.getItem('user')),
    reset_pass_status_code: null,
}


const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        user: action.user,
        error: null,
        loading: false
    });
}


const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        user: null,
    });
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS: return authSuccess(state, action);
        case AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
}

export default reducer;
