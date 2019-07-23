import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../../components/Filter/Filter';
import TaskItems from '../../components/TaskItems/TaskItems';
import TaskCreator from '../../components/TaskCreator/TaskCreator';
import * as actions from '../../store/actions/index';

import './TaskList.css';

class TaskList extends Component {
    
    render () {
        const activeTask = this.props.taskArray.reduce((coundDone, item) =>{
            return !item.done ? ++coundDone : coundDone;
        }, 0);
        const doneTask = this.props.taskArray.reduce((coundDone, item) =>{
            return item.done ? ++coundDone : coundDone;
        }, 0);
        return (
            <div className="container">
                <Filter />
                <div>
                    <span>
                        <strong>{activeTask} </strong>
                        task need to be done
                    </span>
                    <span>
                    <strong> {doneTask} </strong>
                        task done
                    </span>
                </div>
                <div className="test">
                    <TaskItems 
                        taskArray={this.props.taskArray}
                        searchVal={this.props.value}
                        category={this.props.category}
                        clicked={id => this.props.onClickedItem(id)}
                        clickedRemoveBtn={id => this.props.onRemoveItemHandler(id)}
                    />
                </div>
                <div>
                    <TaskCreator />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state.value,
        taskArray: state.taskArray,
        category: state.category
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickedItem: id => dispatch(actions.markItemDone(id)),
        onRemoveItemHandler: id => dispatch(actions.removeItem(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);