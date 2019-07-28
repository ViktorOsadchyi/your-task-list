import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { authSaga, checkAuthTimeoutSaga } from './auth';
import {
    initTaskList
} from './taskList';

export function* watcherTaskList() {
    yield takeEvery(actionTypes.TASK_LIST_INIT, initTaskList);
}

export function* watcherAuth() {
    yield takeEvery(actionTypes.AUTH_USER, authSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
}