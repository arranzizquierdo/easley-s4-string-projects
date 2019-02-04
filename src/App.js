import React, { Component } from 'react';
import './stylesheets/App.scss';
import GroupList from "./components/GroupList";
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import ConversationPage from './components/ConversationPage';
import ConversationThreading from './components/ConversationThreading';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEllipsisH,
  faEyeSlash,
  faPaperPlane,
  faKey
} from '@fortawesome/free-solid-svg-icons';
library.add(faEllipsisH, faEyeSlash, faPaperPlane, faKey);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
    this.addModalClick = this.addModalClick.bind(this);
    this.cancelClickModal = this.cancelClickModal.bind(this);  }

  inputSendMessage(event) {
    const sendMessageInputValue = event.target.value;
    console.log("SendMessage input value:", sendMessageInputValue);
  }

  addModalClick(event){
    this.setState(prevState => {
      return {
      ...prevState,
      isHidden: false,
      }
    })
  }

  cancelClickModal(event){
    this.setState(prevState => {
      return {
        ...prevState,
        isHidden: true,
        }
    }
    )
  }

  render() {
    return (
        <Switch>
          <Route exact path="/" render={props => <LandingPage />} />
          <Route path="/main-page" render={props => (
          <MainPage
          addModalClick={this.addModalClick}
          cancelClickModal={this.cancelClickModal}
          isHidden={this.state.isHidden}
          />)} />
          <Route
            path="/conversation-page"
            render={props => (
              <ConversationPage
              inputSendMessage={this.inputSendMessage}
              addModalClick={this.addModalClick}
              cancelClickModal={this.cancelClickModal}
              isHidden={this.state.isHidden}

              />
            )}
          />
          <Route
            path="/conversation-threading"
            render={props => (
              <ConversationThreading
              inputSendMessage={this.inputSendMessage}
              addModalClick={this.addModalClick}
              />
            )}
          />
          <Route path="/grouplist" render={props => <GroupList />} />
        </Switch>
    )
  }
}

export default App;
