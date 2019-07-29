import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css';

const navigationItems = ( props ) => {
    const styleItem = ['list-item'];
    return (
        <ul className="item-list"> 
            <NavigationItem
                styleProp="list-item" 
                link="/" exact
                clicked={props.clicked}
            >TODO</NavigationItem>
            {
                props.isAuth
                    ? (
                        <NavigationItem
                            styleProp={styleItem}
                            link="/logout"
                            clicked={props.clicked}
                        >Logout</NavigationItem>
                    )
                    : null
            }
            {
                !props.isAuth
                    ? (
                        <NavigationItem
                            styleProp={styleItem}
                            link="/auth"
                            clicked={props.clicked}
                        >Authenticate</NavigationItem>
                    )
                    : null
            }
        </ul>
    );
};

export default navigationItems;