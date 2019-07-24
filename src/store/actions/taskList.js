
import * as actionTypes from './actionTypes';

export const changeSearchValue = (val) => {
    return {
        type: actionTypes.CHANGE_SEARCH_VALUE,
        value: val
    };
};

export const markItemDone = (id) => {
    return {
        type: actionTypes.CHANGE_ITEM_MARK,
        id: id
    }
}

export const changeCategory = (name) => {
    return {
        type: actionTypes.FILTER_CATEGORY,
        name: name
    };
};

export const removeItem = id => {
    return {
        type: actionTypes.REMOVE_ITEM,
        id: id
    };
};

export const addItem = (task, priority) => {
    return {
        type: actionTypes.ADD_ITEM,
        task: task,
        priority: priority
    }
}

export const setTask = ( tasks ) => {
    return {
        type: actionTypes.SET_TASK,
        taskArray: tasks
    }
}

export const fetchTaskFail = () => {
    return {
        type: actionTypes.SET_TASK_FAIL
    }
}

export const initTask = () => {
    return {
        type: actionTypes.TASK_LIST_INIT
    };
};