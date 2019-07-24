import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import {
    initTaskList
} from './taskList';

export function* watcherTaskList() {
    yield takeEvery(actionTypes.TASK_LIST_INIT, initTaskList)
}