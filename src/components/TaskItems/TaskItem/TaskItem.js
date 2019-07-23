import React from 'react';

import Button from '../../UI/Button/Button';

import './TaskItem.css';

const taskItem = (props) => {
    const styleTask = ['item-task'];

    if (props.done) {
        styleTask.push('item-task__done');
    }

    return (
        <div className="task-block__item">
            <span>{props.index+1}</span>
            <span
                className={styleTask.join(' ')}
                onClick={props.clicked}
            >{props.children}</span>
            <div className="item__btn-block">
                <Button clickedBtn={props.clickedRemoveBtn}>X</Button>
                <Button>Save</Button>
            </div>
        </div>
    );
}

export default taskItem;