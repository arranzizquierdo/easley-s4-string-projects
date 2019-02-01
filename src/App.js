import React, { Component } from 'react';
import './stylesheets/App.scss';
import './components/GroupList';
import GroupList from './components/GroupList';

class App extends Component {
  render() {
    return (
      <GroupList />
    );
  }
}

export default App;
