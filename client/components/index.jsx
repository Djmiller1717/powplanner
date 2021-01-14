import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
        </Switch>
      </Router>
    );
  }
}

export default connect()(Routes);
