import React, { Component } from 'react';
import './stylesheets/App.scss';
import SendMessage from '../src/components/SendMessage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane, faKey } from '@fortawesome/free-solid-svg-icons';
library.add(faPaperPlane, faKey);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        "WE in process..."
        <SendMessage />
      </React.Fragment>
    );
  }
}

export default App;
