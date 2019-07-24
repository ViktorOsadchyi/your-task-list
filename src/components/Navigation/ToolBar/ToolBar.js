import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

import './ToolBar.css';

const toolBar = ( props ) => (
    <header className="head__nav-bar">
        <div className="nav-bar">
            <div className="logo">
                <Logo />
            </div>
            <nav className="nav-bar__nav">
                <NavigationItems />
            </nav>
        </div>
    </header>
);

export default toolBar;