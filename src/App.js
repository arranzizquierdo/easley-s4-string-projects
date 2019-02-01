import React, { Component } from 'react';
import './stylesheets/App.scss';
import LogIn from './components/LogIn';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEyeSlash, faKey } from '@fortawesome/free-solid-svg-icons';
library.add(faEyeSlash, faKey);


class App extends Component {
  render() {
    return (
      <LogIn />
    );
  }
}

export default App;
