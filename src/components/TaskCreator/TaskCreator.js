import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions/index';

import './TaskCreator.css';

class TaskCreator extends Component {
    state = {
        inputValue: '',
        priority: null
    }

    onChandeHandler = event => {
        this.setState({inputValue: event.target.value});
    }

    onChandePriorityHandler = (event) => {
        this.setState({priority: event.target.value});
    }

    submitHandler = () => {
        event.preventDefault();
        console.log('form');
    }

    onClearForm = () => {
        this.setState({
            inputValue: '',
            priority: null
        });
    }

    render () {
        return (
            <form onSubmit={this.submitHandler} className="items-form">
                <div className="item-form__task-name">
                    <label>Task</label>
                    <Input 
                        defaultText='What neet to be done'
                        changeInput={(e) => this.onChandeHandler(e)}
                    />
                </div>
                <div className="item-form__priopity">
                    <label>Task priority</label>
                    <Input 
                        defaultText='Task priority'
                        changeInput={(e) => this.onChandePriorityHandler(e)}
                    />
                </div>
                <div className="item-form__btn-block">
                    <Button
                        clickedBtn={() => this.props
                            .onAddItem(this.state.inputValue, this.state.priority)}
                        styleElem="task-creator"
                    >Add</Button>
                    <input
                        className="input"
                        type="reset"
                        value="Clear"
                        onClick={this.onClearForm}
                />
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: (task, priority) => dispatch(actions.addItem(task, priority))
    }
}

export default connect(null, mapDispatchToProps)(TaskCreator);