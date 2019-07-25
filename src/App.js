import React, { Component } from 'react';
//import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';

import TaskList from './containers/TaskList/TaskList';
import Layout from './hoc/Layout/Layout';
//import * as actions from './store/actions/index';

import Auth from './containers/Authentication/Authentication';

import './App.css';

class App extends Component {

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
          <Auth />
        </Layout>
      </div>
    );
  }
}

export default App;
