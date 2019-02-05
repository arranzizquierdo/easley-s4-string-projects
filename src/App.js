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
      userInfo: {
        nickname: "",
        password: ""
      },
      dataUser: null,
      logIn: {
        error: ""
      }
    };
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

  getDataInfo(props){
    fetchToken(props)
    // fetch('https://adalab.string-projects.com/api/v1/sessions', {
    //   method: "POST",
    //   body: JSON.stringify(this.state.userInfo),
    //   headers: {
    //     "content-type": "application/json"
    //   }
    // })
    //   .then(response => {
    //       if(!response.ok){
    //       throw (response);
    //     }
    //     return response.json()
    //   })
    .then(data => {
        return (
          this.setState({
            dataUser: data.user
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
      logIn: {
        errorLogIn: ""
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
          <Route exact path="/" render={props => <LandingPage saveData={this.saveData} handleButton={this.handleButton} wrongCredentials={this.state.logIn.error} />} />
          <Route path="/mainpage" render={props => <MainPage />} />
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
        </Switch>
    )
  }
}

export default App;
