import * as actionTypes from '../actions/actionTypes';

const initState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};

const authStart = (state, action) => {
    return { ...state, error: null, loading: true };
}

const authSuccess = (state, action) => {
    return { 
        ...state, 
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    };
};

const authFail = (state, action) => {
    return { ...state, error: action.error, loading: false };
};

const authLogout = (state, action) => {
    return {
        ...state,
        token: null,
        userId: null,
        isAuth: null
    };
};

const setRedirectPathForAuth = (state, action) => {
    return {
        ...state,
        authRedirectPath: action.path
    };
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.REDIRECT_PATH_AUTH: return setRedirectPathForAuth(state, action);
        default:
            return state;
    }
};

export default reducer;