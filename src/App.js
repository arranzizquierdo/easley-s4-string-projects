import React, { Component } from 'react';
import './stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/MainPage/MainPage';
import ConversationPage from './components/ConversationPage/ConversationPage';
import ConversationThreading from './components/ConversationThreading/ConversationThreading';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Switch>
        <Route 
          exact path="/"  
          render={props => (
            <LandingPage/>
          )}
        />
        <Route 
          path="/mainpage"
          render={props => (
            <MainPage/>
          )}
        />
        <Route 
          path="/conversationpage"
          render={props => (
            <ConversationPage/>
          )}
        />
        <Route 
          path="/conversationthreading"
          render={props => (
            <ConversationThreading/>
          )}
        />
      </Switch>

    )
  }
}

export default App;
