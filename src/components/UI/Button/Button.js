import React from 'react';

import './Button.css';

const button = (props) => {
    const styleBtn = [`${props.styleElem}`, 'btn'];
    if (props.category === props.children.toLowerCase()) {
        styleBtn.push('active');
    }

    return (
        <button
            className={styleBtn.join(' ')}
            onClick={props.clickedBtn}
            disabled={props.disabled}
        >{props.children}</button>
    );
}

export default button;