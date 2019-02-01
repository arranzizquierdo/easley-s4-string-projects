import React, { Component, Fragment } from 'react';
import './stylesheets/App.scss';
import Header from './components/Header';
import IndividualMessage from './components/IndividualMessage';

class App extends Component {
  render() {
    return (
      // "WE in process..."
      <Fragment>
      <Header />
      <IndividualMessage />
      </Fragment>
    );
  }
}

export default App;
