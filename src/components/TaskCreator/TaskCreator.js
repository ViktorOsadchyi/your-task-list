import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions/index';

import './TaskCreator.css';

class TaskCreator extends Component {
    state = {
        inputValue: '',
        priority: null,
        isNum: true,
        isTask: true
    }

    isNumeric = (num) => {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

    onChandeHandler = event => {
        this.setState({
            inputValue: event.target.value,
            isTask: true
        });
    }

    onChandePriorityHandler = (event) => {
        const priority = event.target.value;
        const isNumber = this.isNumeric(priority) 
            && priority > 0 && priority%1 === 0;

        priority === ''
            ? this.setState({ isNum: true })
            : this.setState({ isNum: isNumber });
        
        this.setState(isNumber 
            ? {priority: priority - 1}
            : {priority: null});
    }

    onClearForm = () => {
        this.setState({
            inputValue: '',
            priority: null,
            isNum: true
        });
    }

    submitHandler = () => {
        event.preventDefault();
        if (this.state.isNum && this.state.inputValue) {
            this.props.onAddItem(this.state.inputValue, 
                                    this.state.priority)
        }
        this.setState(this.state.inputValue
            ? {isTask: true}
            : {isTask: false});
    }

    render () {
        const styleInputPri = ['item-form__priopity'];
        const styleInputVal = ['item-form__task-name']

        if (!this.state.isNum) {
            styleInputPri.push('invalid');
        }

        styleInputVal.push(!this.state.isTask
            ? 'invalid'
            : '');

        return (
            <form onSubmit={this.submitHandler} className="items-form">
                <div className={styleInputVal.join(' ')}>
                    <label>Task</label>
                    <Input 
                        defaultText='What neet to be done'
                        changeInput={(e) => this.onChandeHandler(e)}
                    />
                </div>
                <div className={styleInputPri.join(' ')}>
                    <label>Task priority</label>
                    <Input 
                        defaultText='Task priority'
                        changeInput={(e) => this.onChandePriorityHandler(e)}
                    />
                </div>
                <div className="item-form__btn-block">
                    <Button
                        clickedBtn={() => this.submitHandler}
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