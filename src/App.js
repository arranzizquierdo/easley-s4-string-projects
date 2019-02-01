import React, { Component } from 'react';
import './stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/index';
// import MainPage from './components/MainPage/MainPage';
// import ConversationPage from './components/ConversationPage/ConversationPage';
// import ConversationThreading from './components/ConversationThreading/ConversationThreading';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane, faKey } from '@fortawesome/free-solid-svg-icons';
library.add(faPaperPlane, faKey);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  inputSendMessage(event) {
    const sendMessageInputValue = event.target.value;
    console.log('SendMessage input value:', sendMessageInputValue);
  }
  
  render() {
    return (
      <Switch>
        <Route 
          exact path="/"  
          render={() => (
            <LandingPage/>
          )}
        />
        {/* <Route 
          path="/mainpage"
          render={props => (
            <MainPage/>
          )}
        />
        <Route 
          path="/conversationpage"
          render={props => (
            <ConversationPage inputSendMessage={this.inputSendMessage}/>
          )}
        />
        <Route 
          path="/conversationthreading"
          render={props => (
            <ConversationThreading inputSendMessage={this.inputSendMessage}/>
          )}
        /> */}
      </Switch>

    )
  }
}

export default App;
