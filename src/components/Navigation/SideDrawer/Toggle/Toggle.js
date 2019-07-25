import React from 'react';

import './Toggle.css';

const toggle = ( props ) => {
    const styleBar = ['toggleBar'];
    if (props.open) {
        styleBar.push('menu_min')
    }
    return (
        <div onClick={props.clicked} className={styleBar.join(' ')}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default toggle;