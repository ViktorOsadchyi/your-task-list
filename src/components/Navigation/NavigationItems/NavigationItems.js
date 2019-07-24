import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css';

const navigationItem = ( props ) => {
    const styleItem = ['list-item'];
    return (
        <ul className="item-list">
            <NavigationItem
                styleProp="list-item active"
            >TODO</NavigationItem>
            <NavigationItem
                style={styleItem}
            >Authenticate</NavigationItem>
        </ul>
    );
};

export default navigationItem;