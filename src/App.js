import React, { Component, Fragment } from 'react';
import './stylesheets/App.scss';
import GroupList from './components/GroupList';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/index';
import MainPage from './components/MainPage';
import ConversationPage from './components/ConversationPage/ConversationPage';
import ConversationThreading from './components/ConversationThreading';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEyeSlash, faPaperPlane, faKey } from '@fortawesome/free-solid-svg-icons';
library.add(faEyeSlash, faPaperPlane, faKey);

class App extends Component {
  constructor(props) {
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
      <Fragment>
        <Header />
        <Switch>
          <Route
            exact path="/"
            render={props => (
              <LandingPage />
            )}
          />
          <Route
            path="/mainpage"
            render={props => (
              <MainPage />
            )}
          />
          <Route
            path="/conversationpage"
            render={props => (
              <ConversationPage inputSendMessage={this.inputSendMessage} />
            )}
          />
          <Route
            path="/conversationthreading"
            render={props => (
              <ConversationThreading inputSendMessage={this.inputSendMessage} />
            )}
          />
           <Route
            path="/grouplist"
            render={props => (
              <GroupList />
            )}
          />
        </Switch>
      </Fragment>
    )
  }
}

export default App;
