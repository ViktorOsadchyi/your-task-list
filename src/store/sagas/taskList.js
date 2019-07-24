import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* initTaskList () {
    try {
        const response = yield axios.get('https://todo-5a6ca.firebaseio.com/taskArray.json');
        yield put(actions.setTask(response.data)); 
    } catch (err) {
        yield put(actions.fetchTaskFail(err));
    }
}