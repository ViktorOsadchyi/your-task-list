import React, { Component } from "react";

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import './Authentication.css';

class Auth extends Component {

    state = {
        isSignUp: true,
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
                    minLen: 3
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
        }
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

        let form = fromElementArray.map(elem => (
            <div className="form-block__item" key={`div${elem.id}`}>
                <label className={ elem.config.validation.required
                    ? 'item__lable important' 
                    : 'item__lable'}>
                    {elem.config.tagConfig.placeholder}
                </label>
                <Input
                    key={elem.id}
                    type={elem.config.htmlTag}
                    defaultText={elem.config.tagConfig.placeholder}
                />
            </div>
        ));

        return (
            <div className="form-block">
                <form>
                    {form}
                </form>
            </div>
        );
    }
}

export default Auth;