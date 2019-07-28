import React, { Component } from "react";
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import * as action from '../../store/actions/index';

import './Authentication.css';

class Auth extends Component {

    state = {
        rules: {
            name: {
                htmlTag: 'input',
                tagConfig: {
                    type: 'text',
                    placeholder: 'Your name or nickname'
                },
                value: '',
                validation: {
                    required: false,
                    maxLen: 20,
                    minLen: 3,
                    userName: true
                },
                valid: false,
                touched: false
            },
            email: {
                htmlTag: 'input',
                tagConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                htmlTag: 'input',
                tagConfig: {
                    type: 'password',
                    placeholder: 'Your password'
                },
                value: '',
                validation: {
                    required: true,
                    minLen: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: true,
        formIsValid: false
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        } 
    
        if (rules.minLen) {
            isValid = value.length >= rules.minLen && isValid;
        }
    
        if (rules.maxLen) {
            isValid = value.length <= rules.maxLen && isValid;  
        }
    
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
    
        if (rules.userName) {
            const pattern = /[\w_-][\S\w\d_-]+$/;
            isValid = pattern.test(value) && isValid
        }
    
        return isValid;
    }

    changeMethod = () => {
        this.setState(prevState => {
            return {isSignUp: !prevState.isSignUp}
        });
    }

    userHandler = () => {
        event.preventDefault();

        const formData = {};
        for (let elem in this.state.rules) {
            if (!this.state.isSignUp && elem === 'name') continue;
            let val = this.state.rules[elem].value;
            formData[elem] = val.trim()
                ? val
                : `user${Math.floor(Math.random() * (10000 - 1000) + 1000)}`;
        }

        this.props.onAuth(this.state.rules.email.value, this.state.rules.password.value, this.state.isSignUp);
        
    }

    inputChangedHandler = (event, inputId) => {
        const val = event.target.value;

        const updatedFormElem = {
            ...this.state.rules[inputId],
            value: val,
            valid: this.checkValidity(event.target.value, this.state.rules[inputId].validation),
            touched: true
        };

        const updatedUserElem = {
            ...this.state.rules,
            [inputId]: updatedFormElem
        };

        let formIsValid = true;
        for (let inputId in updatedUserElem) {
            if (inputId !== 'name') {
                formIsValid = updatedUserElem[inputId].valid && formIsValid;
            }
        }

        this.setState({
            rules: updatedUserElem,
            formIsValid: formIsValid
        });
    }

    render () {
        const fromElementArray = [];

        for (let key in this.state.rules) {
            if (!this.state.isSignUp) {
                if (key === 'name') {
                    continue;
                }
            }
            fromElementArray.push({
                id: key,
                config: this.state.rules[key]
            });
        }

        let formElems = fromElementArray.map(elem => (
            <div className="form-block__item" key={`div${elem.id}`}>
                <label className={ elem.config.validation.required
                    ? 'item__lable important' 
                    : 'item__lable'}>
                    {elem.config.tagConfig.placeholder}
                </label>
                <Input
                    key={elem.id}
                    type={elem.config.tagConfig.type}
                    defaultText={elem.config.tagConfig.placeholder}
                    changeInput={(event) => this.inputChangedHandler(event, elem.id)}
                />
            </div>
        ));

        if (this.props.loading) {
            formElems = <Spinner />;
        }

        let errorMessage = null;

        if (this.props.error) {
            let textHeadError = this.props.error.message;
            let textError = null;
            switch(this.props.error.message) {
                case 'EMAIL_EXISTS': 
                    textHeadError = 'Email is exists';
                    textError = 'The email address is already in use by another account.'
                    break;
                case 'EMAIL_NOT_FOUND':    
                    textHeadError = 'Email not found';
                    textError = 'There is no user record corresponding to this identifier. The user may have been deleted.'
                    break;
                case 'INVALID_PASSWORD':
                    textHeadError = 'Invalid password';
                    textError = 'The password is invalid or the user does not have a password.'
                    break;
                case 'USER_DISABLED':
                    textHeadError = 'User disabled';
                    textError = 'The user account has been disabled by an administrator.'
                    break;
                case 'INVALID_EMAIL': 
                    textHeadError = 'Invalid email'
                    textError = 'The email address is badly formatted.'
                    break;
                case 'MISSING_PASSWORD':
                    textHeadError = 'You missing password'
                    textError = 'Fill in the "password" to register an account.';
                    break;
                default:
                    textHeadError = this.props.error.message;
                    textError = this.props.error.message;
            }
            errorMessage = (
                <div className='error-message'>
                    <p>{textHeadError}</p>
                    <p>{textError}</p>
                </div>
            );
        }

        const title = this.state.isSignUp
            ? 'sign up'
            : 'sign in';

        return (
            <div className="form-block">
                {errorMessage}
                <form onSubmit={this.userHandler}>
                    <span className='form-block__title'>{title}</span>
                    {formElems}
                    <div className="form-block__btns">
                        <Button
                            /*disabled={!this.state.formIsValid}*/
                        >SUBMIT</Button>
                        <input 
                            type='button' 
                            value={title} 
                            onClick={this.changeMethod}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(action.auth(email, password, isSignUp))
    }
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);