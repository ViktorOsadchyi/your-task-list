import React, { Component } from 'react';

import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import Aux from '../AuxComponent/AuxComponent';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <ToolBar />
                <div>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Layout;