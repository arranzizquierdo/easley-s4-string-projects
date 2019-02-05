import React, { Component } from 'react';
import './stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import ConversationPage from './components/ConversationPage';
import ConversationThreading from './components/ConversationThreading';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fetchToken } from "./components/services/TokenService";
import {
  faEllipsisH,
  faEyeSlash,
  faPaperPlane,
  faKey,
  faAngleDoubleLeft
} from '@fortawesome/free-solid-svg-icons';
library.add(faEllipsisH, faEyeSlash, faPaperPlane, faKey, faAngleDoubleLeft);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      userInfo: {
        nickname: "",
        password: ""
      },
      dataUser: null,
      groups: null,
      logIn: {
        error: 0
      }
    };
    this.addModalClick = this.addModalClick.bind(this);
    this.cancelClickModal = this.cancelClickModal.bind(this);
    this.saveData = this.saveData.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.getDataInfo = this.getDataInfo.bind(this);
  }

  saveData(event) {
    const { name, value } = event.target;
    this.setState(prevState => {
      return {
        userInfo: {
          ...prevState.userInfo,
          [name]: value
        }

      }
    })
  }

  inputSendMessage(event) {
    const sendMessageInputValue = event.target.value;
    console.log("SendMessage input value:", sendMessageInputValue);
  }

  addModalClick(event) {
    this.setState(prevState => {
      return {
        ...prevState,
        isHidden: false,
      }
    })
  }

  cancelClickModal(event) {
    this.setState(prevState => {
      return {
        ...prevState,
        isHidden: true,
      }
    }
    )
  }

  getDataInfo(){
    fetchToken(this.state.userInfo)
    .then(data => {
        return (
          this.setState({
            dataUser: data.user,
            groups: data.groups
          })
        )
      })
      .catch(error => {
        return (
          this.setState({
            logIn: {
              error: error.status
            }
          })
        )

      })
  }

  handleButton() {
    this.setState({
      dataUser: null,
      groups: null,
      logIn: {
        errorLogIn: 0
      }
    })

  this.getDataInfo();
    if (this.state.dataUser !== null) {
      return console.log("siguiente página")
    } else {
      return console.log("mensaje de error")
    }

  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={props =>
          (<LandingPage
            saveData={this.saveData}
            handleButton={this.handleButton}
            wrongCredentials={this.state.logIn.error}
          />)} />
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
      </Switch >
    )
  }
}

export default App;
