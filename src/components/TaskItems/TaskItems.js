import React from 'react';

import TaskItem from './TaskItem/TaskItem';

import './TaskItems.css';

const taskItems = (props) => {    

    let itemsArray = [
        ...props.taskArray
    ];

    if (props.category === 'active') {
        itemsArray = itemsArray.filter(item => !item.done);
    } else if (props.category === 'done') {
        itemsArray = itemsArray.filter(item => item.done);
    }

    itemsArray = itemsArray.map((item, i) => {
        return item.task.toLowerCase()
            .indexOf(props.searchVal.toLowerCase()) > -1
            ? 
                <TaskItem
                    key={item.id} 
                    index={i}
                    id={item.id}
                    done={item.done}
                    important={item.important}
                    clicked={id => props.clicked(item.id)}
                    clickedRemoveBtn={() => props.clickedRemoveBtn(item.id)}
                    clickedSave={() => props.clickedSave(item.id)}
                >{item.task}</TaskItem>
            : null;
    });
    let taskBlock = <p>There are no tasks in this category yet.</p>;
    
    if (itemsArray.length !== 0) {
        taskBlock = (
            <ul className="task-block">
                {itemsArray}
            </ul>
        );
    }

    return taskBlock;
};

export default taskItems;