import { put, delay } from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';



function* getTaskArray (action) {
    const queryParams = 
        '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
    
    const response = yield axios
        .get( '/users.json' + queryParams )
    const fetchOrders = [];
    for (let key in response.data) {
        fetchOrders.push( {
            ...response.data[key],
            id: key
        } );
    }

    return fetchOrders;
    
}

export function* initTaskList (action) {
    try {
        console.log(action.isSignUp);
        if (action.isSignUp) {
            yield put(actions.setTask([]));
            
        } else if (action.isSignUp === false) {
            try {
                const queryParams = 
                    '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
                
                const response = yield axios
                    .get( '/users.json' + queryParams );
                const fetchOrders = [];
                for (let key in response.data) {
                    fetchOrders.push( {
                        ...response.data[key],
                        id: key
                    } );
                }
                console.log(fetchOrders);
            } catch (err) {
                yield put(actions.setTask([]));
            }
        } else {
            const response = yield axios.get('/taskArray.json');
            yield put(actions.setTask(response.data, action.isSignUp)); 
        }
    } catch (err) {
        yield put(actions.fetchTaskFail(err));
    }
};

function* addItemToDB (action) {
    const itemData = {
        task: action.task,
        done: false,
        important: false,
        date: new Date(),
        userId: action.userId
    }
    try {
        const response  = yield axios.post( '/users.json?auth=' + action.token, itemData );
        yield put(actions.addItemSuccess());
    } catch (error) {
        yield put(actions.addItemFail( error ));
    }
}; 

export function* addItem( action ) {
    yield put(actions.addItemStart());
    yield put(actions.addItemToState(action.task, action.priority));
    yield addItemToDB(action);
};