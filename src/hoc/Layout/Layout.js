import React, { Component } from 'react';

import ToolBar from '../../components/Navigation/SideDrawer/ToolBar/ToolBar';
import Aux from '../AuxComponent/AuxComponent';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component { 

    state = {
        showSideDrawer: false 
    }

    sideDwawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } )
    }

    sideDrawerToggleHandler = () => {
        console.log('clicked')
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        } );
    }

    shouldComponentUpdate(n, ns, nc) {
        console.log('[shouldComponentUpdate]');
        return true;
    }
    componentWillUpdate(n, ns) {
        console.log('[componentWillUpdate]');
    }
    componentDidUpdate(n, ns, p) {
        console.log('[componentDidUpdate]');
    }
    componentDidMount(){
        console.log('[componentDidMount]');
    }
    componentWillUnmount(){
        console.log('[componentWillUnmount]');
    }

    render () {
        return (
            <Aux>
                <ToolBar 
                    showDrawer={this.state.showSideDrawer}
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <div>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Layout;