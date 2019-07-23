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
                    clicked={id => props.clicked(item.id)}
                    clickedRemoveBtn={() => props.clickedRemoveBtn(item.id)}
                >{item.task}</TaskItem>
            : null;
    });

    return (
        <ul className="task-block">
            {itemsArray}
        </ul>
    );
};

export default taskItems;