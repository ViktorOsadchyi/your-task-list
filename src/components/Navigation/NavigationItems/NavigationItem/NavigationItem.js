import React from 'react';

import './NavigationItem.css';

const navigationItem = ( props ) => (
    <li 
        className={props.styleProp}
    >{props.children}</li>
);

export default navigationItem;