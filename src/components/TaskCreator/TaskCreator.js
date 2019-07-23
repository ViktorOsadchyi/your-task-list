import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions/index';

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

    render () {
        return (
            <div>
                <label>Enter task</label>
                <Input 
                    defaultText='What neet to be done'
                    changeInput={(e) => this.onChandeHandler(e)}
                />
                <label>Enter task priority</label>
                <Input 
                    defaultText='Task priority'
                    changeInput={(e) => this.onChandePriorityHandler(e)}
                />
                <Button
                    clickedBtn={() => this.props
                        .onAddItem(this.state.inputValue, this.state.priority)}
                >Add</Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: (task, priority) => dispatch(actions.addItem(task, priority))
    }
}

export default connect(null, mapDispatchToProps)(TaskCreator);