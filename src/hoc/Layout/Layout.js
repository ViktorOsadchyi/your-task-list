import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        } );
    }

    render () {
        return (
            <Aux>
                <ToolBar 
                    isAuth={this.props.isAuth}
                    showDrawer={this.state.showSideDrawer}
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />
                <SideDrawer 
                    isAuth={this.props.isAuth}
                    open={this.state.showSideDrawer}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <div>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);