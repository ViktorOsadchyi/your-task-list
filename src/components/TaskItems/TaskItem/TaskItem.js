import React from 'react';

import Button from '../../UI/Button/Button';

import './TaskItem.css';

const taskItem = (props) => {
    const styleTask = ['item-task'];

    if (props.done) {
        styleTask.push('item-task__done');
    }

    if (props.important) {
        styleTask.push('item-task__important');
    }

    return (
        <div className="task-block__item">
            <span className="item-index">{props.index+1}.</span>
            <span
                className={styleTask.join(' ')}
                onClick={props.clicked}
            >{props.children}!</span>
            <div className="item__btn-block">
                <Button 
                    clickedBtn={props.clickedRemoveBtn}
                    styleElem="items cancel">X</Button>
                <Button
                    clickedBtn={props.clickedSave}
                    styleElem="items">
                        {
                            props.important
                                ? 'Unsave'
                                : 'Save'
                        }
                    </Button>
            </div> 
        </div>
    );
}

export default taskItem;