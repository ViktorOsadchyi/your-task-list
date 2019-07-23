import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions/index';

import './Filter.css';

class Filter extends Component {

    onChangeInputHandler = (event) => {
        const textInput = event.target.value;
        this.props.onChangeHandler(textInput);
    }

    /*onClickedBtnHandler = (name) => {
        console.log(name);
    }*/

    render () {
        const nameBtn = ['All', 'Active', 'Done'];
        const btnBlock = nameBtn.map(name => {
            return <Button 
                    key={name}
                    category={this.props.category}  
                    clickedBtn={() => this.props.onClickedBtnHandler(name)} 
                    styleElem="filter" 
                >{name}</Button>
        });
        return (
            <div className="container-filter">
                <Input 
                    defaultText='search task...'
                    changeInput={(e) => this.onChangeInputHandler(e)}
                    value={this.props.value}
                />
                <div className="container-filter__btn-block">
                    {btnBlock}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state.value,
        category: state.category
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: e => dispatch(actions.changeSearchValue(e)),
        onClickedBtnHandler: name => dispatch(actions.changeCategory(name))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Filter);