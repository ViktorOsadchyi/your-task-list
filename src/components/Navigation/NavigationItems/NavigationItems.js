import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css';

const navigationItem = ( props ) => {
    const styleItem = ['list-item'];
    return (
        <ul className="item-list"> 
            <NavigationItem
                styleProp="list-item active"
                link="/" exact
                clicked={props.clicked}
            >TODO</NavigationItem>
            <NavigationItem
                styleProp={styleItem}
                link="/auth"
                clicked={props.clicked}
            >Authenticate</NavigationItem>
        </ul>
    );
};

export default navigationItem;