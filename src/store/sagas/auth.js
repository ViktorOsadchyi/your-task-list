import { put, delay } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
}

export function* authSaga (action) {
    yield put(actions.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    }
    const key = 'AIzaSyCE6n-j6lmDA3QHE5PBbC88sK5kDaVso1o';
    let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${key}`;
    if (!action.isSignup) {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
    }
    
    try {
        const response = yield axios.post(url, authData);
        console.log(response);
        yield put(actions.authSuccess(response.data.idToken, response.data.localId));
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
    } catch (err) {
        yield put(actions.authError(err.response.data.error));
    }
}

//AIzaSyCE6n-j6lmDA3QHE5PBbC88sK5kDaVso1o