import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../../components/Filter/Filter';
import TaskItems from '../../components/TaskItems/TaskItems';
import TaskCreator from '../../components/TaskCreator/TaskCreator';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

import './TaskList.css';

class TaskList extends Component {
    componentDidMount() {
        this.props.onInitTask();
    }
    
    render () {
        let tasks = this.props.error
            ? <p>Task List can't be loaded!</p>
            : <Spinner />;
        
            let infoBlock = this.props.error
                ? null
                : <span>Loading...</span>;

        if (this.props.taskArray) {
            const activeTask = this.props.taskArray.reduce((coundDone, item) =>{
                return !item.done ? ++coundDone : coundDone;
            }, 0);
            const doneTask = this.props.taskArray.reduce((coundDone, item) =>{
                return item.done ? ++coundDone : coundDone;
            }, 0);

            tasks = (
                <TaskItems 
                    taskArray={this.props.taskArray}
                    searchVal={this.props.value}
                    category={this.props.category}
                    clicked={id => this.props.onClickedItem(id)}
                    clickedRemoveBtn={id => this.props.onRemoveItemHandler(id)}
                    clickedSave={id => this.props.onSaveItem(id)}
                />
            );

            infoBlock = (
                <div className="container__info-block">
                    <span>
                        <strong>{activeTask} </strong>
                        task need to be done
                    </span>
                    <span>
                    <strong> {doneTask} </strong>
                        task done
                    </span>
                </div>
            );
        }
        
        
        return (
            <div className="container">
                <Filter />
                {infoBlock}
                <div className="container__list-items">
                    {tasks}
                </div>
                <div className="container__add-item">
                    <TaskCreator />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state.todo.value,
        taskArray: state.todo.taskArray,
        category: state.todo.category,
        error: state.todo.errorInit
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickedItem: id => dispatch(actions.markItemDone(id)),
        onRemoveItemHandler: id => dispatch(actions.removeItem(id)),
        onInitTask: () => dispatch(actions.initTask()),
        onSaveItem: id => dispatch(actions.setImportantItem(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);