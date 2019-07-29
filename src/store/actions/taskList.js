
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

export const initTask = ( isSignUp, token, userId ) => {
    return {
        type: actionTypes.TASK_LIST_INIT,
        isSignUp: isSignUp,
        token: token,
        userId: userId
    };
};

export const addItem = (task, priority, token, userId) => {
    return {
        type: actionTypes.ADD_ITEM,
        task: task,
        priority: priority,
        token: token,
        userId: userId
    };
};

export const addItemStart = () => {
    return {
        type: actionTypes.ADD_ITEM_START
    }
}

export const addItemToState = (task, priority) => {
    return {
        type: actionTypes.ADD_ITEM_TO_STATE,
        task: task,
        priority: priority
    };
};

export const addItemToDB = (task) => {
    return {
        type: actionTypes.ADD_ITEM,
        task: task
    };
};

export const addItemSuccess = () => {
    return {
        type: actionTypes.ADD_ITEM_SUCCESS
    }
}

export const addItemFail = () => {
    return {
        type: actionTypes.ADD_ITEM_FAIL
    }
}

export const setImportantItem = ( id ) => {
    return {
        type: actionTypes.SET_IMPORTANT_ITEM,
        id: id
    }
}