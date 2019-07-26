import React from 'react';

import NavigationItems from '../../NavigationItems/NavigationItems';
import Logo from '../../../Logo/Logo';
import Toggle from '../Toggle/Toggle';

import './ToolBar.css';

const toolBar = ( props ) => (
    <header className="head__nav-bar">
        <div className="nav-bar">
            <Toggle 
                open={props.showDrawer}
                clicked={props.drawerToggleClicked}
            />
            <div className="logo">
                <Logo />
            </div>
            <nav className="nav-bar__nav only-descktop">
                <NavigationItems /> 
            </nav>
        </div>
    </header>
);

export default toolBar;