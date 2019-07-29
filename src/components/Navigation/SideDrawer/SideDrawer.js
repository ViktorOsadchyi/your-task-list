import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = ( props ) => {
    let attachedClasses = ['sideDrawer', 'close'];
    if (props.open) {
        attachedClasses = ['sideDrawer', 'open'];
    }
    return (
        <div className="sideDrawer-menu">
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
               <nav>
                    <NavigationItems 
                        clicked={props.drawerToggleClicked} 
                        isAuth={props.isAuth}
                    />
                </nav>
            </div>
        </div>
    );
};

export default sideDrawer;