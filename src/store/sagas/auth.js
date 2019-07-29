import { put, delay, call } from 'redux-saga/effects';
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
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
    if (action.isSignup) {
        url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${key}`;
    }

    let token = null;
    let userId = null;
    
    try {
        const response = yield axios.post(url, authData);

        const expirationData = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        token = response.data.idToken;
        userId = response.data.localId;
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationData', expirationData);
        yield localStorage.setItem('userId', response.data.localId);

        yield put(actions.authSuccess(response.data.idToken, response.data.localId));
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
    } catch (err) {
        yield put(actions.authError(err.response.data.error));
    }

    yield put(actions.initTask(action.isSignup, token, userId));
}

export function* logoutSaga() {
    yield call([localStorage, 'removeItem'], "token");
    yield call([localStorage, 'removeItem'], "expirationData");
    yield call([localStorage, 'removeItem'], "userId");
    yield put(actions.logoutSuccess()); 
}

export function* checkAuthStateSaga() {
    const token = yield localStorage.getItem('token');
    if (!token) {
        yield put(actions.logout());
    } else {
        const expirationData = yield new Date(localStorage.getItem('expirationData'));
        if (expirationData <= new Date()) {
            yield put(actions.logout());
        } else {
            const userId = yield localStorage.getItem('userId');
            yield put(actions.authSuccess(token, userId));
            yield put(
                actions.checkAuthTimeout(
                    (expirationData.getTime() - new Date().getTime()) / 1000 
                )
            );
        }
    }
    //yield put(actions.initTask()); // my
}

//AIzaSyCE6n-j6lmDA3QHE5PBbC88sK5kDaVso1o