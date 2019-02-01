import React, { Component } from 'react';
import './stylesheets/App.scss';
import SendMessage from '../src/components/SendMessage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane, faKey } from '@fortawesome/free-solid-svg-icons';
library.add(faPaperPlane, faKey);

class App extends Component {

  inputSendMessage(event) {
    const sendMessageInputValue = event.target.value;
    console.log('SendMessage input value:', sendMessageInputValue);
  }

  render() {
    return (
      <React.Fragment>
        "WE in process..."
        <SendMessage inputSendMessage={this.inputSendMessage}/>
      </React.Fragment>
    );
  }
}

export default App;
