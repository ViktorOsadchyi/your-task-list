import * as actionTypes from '../actions/actionTypes';

const initialState = {
    value: '',
    taskArray: [],
    category: 'all',
    errorInit: false
};

const changeSearchValue = (state, action) => {
    return {
        ...state,
        value: action.value
    };
};

const markItemDone = (state, action) => {
    const updatedTaskArray = [
        ...state.taskArray
    ].map(item => {
        item.id !== action.id
            ? item.done = item.done
            : item.done = !item.done
        return item;
    });

    return {
        ...state,
        taskArray: updatedTaskArray
    }
};

const changeCategory = (state, action) => {
    return {
        ...state,
        category: action.name.toLowerCase()
    }
}

const removeItem = (state, action) => {
    const updateTaskArray = [
        ...state.taskArray
    ].filter(item => item.id !== action.id);

    return {
        ...state,
        taskArray: updateTaskArray
    }
}

const addItem = (state, action) => {
    const updateTaskArray = [...state.taskArray];
    let newItem;
    
    if (action.priority > 0) {
        newItem = {
            ...updateTaskArray[updateTaskArray.length-1],
            id: action.priority > (updateTaskArray.length - 1)
                ? updateTaskArray.length
                : action.priority,
            task: action.task,
            done: false
        };
        updateTaskArray.map(item => 
            item.id < action.priority
            ? item.id
            : item.id += 1
        )
        updateTaskArray.splice(action.priority, 0, newItem);
    } else {
        newItem = {
            ...updateTaskArray[updateTaskArray.length-1],
            id: updateTaskArray[updateTaskArray.length-1].id + 1,
            task: action.task,
            done: false
        };
        updateTaskArray.push(newItem);
    }
  
    return {
        ...state,
        taskArray: updateTaskArray
    }
}

const setTask = (state, action) => {
    return {
        ...state,
        taskArray: action.taskArray
    }
}

const setTaskFail = (state, action) => {
    return {
        ...state,
        errorInit: true
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SEARCH_VALUE: 
            return changeSearchValue(state, action);
        case actionTypes.CHANGE_ITEM_MARK:
            return markItemDone(state, action);
        case actionTypes.FILTER_CATEGORY:
            return changeCategory(state, action);
        case actionTypes.REMOVE_ITEM:
            return removeItem(state, action);
        case actionTypes.ADD_ITEM:
            return addItem(state, action);
        case actionTypes.SET_TASK:
            return setTask(state, action);
        case actionTypes.SET_TASK_FAIL:
            return setTaskFail(state, action);
        default: return state;
    }
};

export default reducer;