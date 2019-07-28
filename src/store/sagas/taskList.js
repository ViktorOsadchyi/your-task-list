import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* initTaskList () {
    try {
        const response = yield axios.get('/taskArray.json');
        yield put(actions.setTask(response.data)); 
    } catch (err) {
        yield put(actions.fetchTaskFail(err));
    }
}