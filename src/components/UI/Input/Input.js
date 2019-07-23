import React from 'react';

const input = (props) => {
    return (
        <div>
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