import React from 'react';

import './Input.css';

const input = (props) => {

    const type = props.type || 'text';

    return (
        <div className="container-input">
            <input 
                type={type} 
                placeholder={props.defaultText}
                value={props.value}
                onChange={props.changeInput}
            />
        </div>
    );
}

export default input;