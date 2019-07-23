import React from 'react';

import './Input.css';

const input = (props) => {
    return (
        <div className="container-input">
            <input 
                type='text' 
                placeholder={props.defaultText}
                value={props.value}
                onChange={props.changeInput}
            />
        </div>
    );
}

export default input;