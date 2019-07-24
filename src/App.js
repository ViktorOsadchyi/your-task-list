import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskList from './containers/TaskList/TaskList';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';

import './App.css';

class App extends Component {
  componentDidMount () {
    
  }

  render() {
    /*let routers = (
      <Switch>
        <Route path="/" exact component={TaskList} />
      </Switch>
    );*/

    return (
      <div>
        <Layout>
          {/*routers*/}
          <TaskList />
        </Layout>
      </div>
    );
  }
}

export default App;
