import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions/index';

import './TaskCreator.css';

class TaskCreator extends Component {
    state = {
        inputValue: '',
        priority: '',
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
        
        this.setState({priority: priority});

    }

    onClearForm = () => {
        this.setState({
            inputValue: '',
            priority: '',
            isNum: true
        });
    }

    submitHandler = () => {
        event.preventDefault();
        
        this.setState(this.state.inputValue
            ? this.state.isNum
                ? {isTask: true}
                : {priority: ''}
            : {isTask: false, inputValue: '', priority: ''});
            
        if (!this.props.error) {
            if (this.state.inputValue && this.state.isNum) {
                this.props.onAddItem(this.state.inputValue, 
                        this.state.priority, this.props.taskArray);
                this.setState({inputValue: '', priority: ''});
            }
        }
    }

    render () {
        const styleInputPri = ['item-form__priopity'];
        const styleInputVal = ['item-form__task-name'];
        const styleError = ['error_box'];

        if (!this.state.isNum) {
            styleInputPri.push('invalid');
        }

        styleInputVal.push(!this.state.isTask
            ? 'invalid'
            : '');
        
            styleError.push(this.state.isTask
                ? 'hidden'  
                : 'visible');

        return (
            <form onSubmit={this.submitHandler} className="items-form">
                <div className={styleInputVal.join(' ')}>
                    <label>Task</label>
                    <Input 
                        defaultText='What neet to be done'
                        changeInput={(e) => this.onChandeHandler(e)}
                        value={this.state.inputValue}
                    />
                    
                </div>
                <span className={styleError.join(' ')}>
                    Please, input task!
                </span>
                <div className={styleInputPri.join(' ')}>
                    <label>Task priority</label>
                    <Input 
                        defaultText='Task priority'
                        changeInput={(e) => this.onChandePriorityHandler(e)}
                        value={this.state.priority}
                    />
                </div>
                <div className="item-form__btn-block">
                    <Button
                        clickedBtn={() => this.submitHandler}
                        styleElem="task-creator"
                        disabled={!(this.state.isNum && this.state.isTask)}
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

const mapStateToProps = state => {
    return {
        error: state.errorInit,
        taskArray: state.taskArray
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: (task, priority, items) => dispatch(actions.addItem(task, priority, items))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator);