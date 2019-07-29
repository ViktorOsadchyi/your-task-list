import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { 
    authSaga, 
    checkAuthTimeoutSaga,
    logoutSaga,
    checkAuthStateSaga
} from './auth';
import {
    initTaskList,
    addItem
} from './taskList';

export function* watcherTaskList() {
    yield takeEvery(actionTypes.TASK_LIST_INIT, initTaskList);
    yield takeEvery(actionTypes.ADD_ITEM, addItem);
}

export function* watcherAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_INIT_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_USER, authSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.CHECK_AUTH_STATE, checkAuthStateSaga)
    ]);
}