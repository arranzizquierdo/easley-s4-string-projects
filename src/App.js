import React, { Component, Fragment } from "react";
import "./stylesheets/App.scss";
import GroupList from "./components/GroupList";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";
import ConversationPage from "./components/ConversationPage";
import ConversationThreading from "./components/ConversationThreading";
import { fetchToken } from "./components/services/TokenService";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEyeSlash,
  faPaperPlane,
  faKey
} from "@fortawesome/free-solid-svg-icons";
library.add(faEyeSlash, faPaperPlane, faKey);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        nickname: "",
        password: ""
      },
      dataUser: ""
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

  getDataInfo(){
    fetch('https://adalab.string-projects.com/api/v1/sessions', {
      method: "POST",
      body: JSON.stringify(this.state.userInfo),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        return (
          this.setState({
            dataUser: data.user
          })
        )
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  handleButton() {
    this.setState({
      dataUser: ""
    })
   this.getDataInfo();
    if (this.state.dataUser !== "") {
      return console.log("next page")
    } else {
      return console.log("error message")
    }

  }

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" render={props => <LandingPage saveData={this.saveData} handleButton={this.handleButton} />} />
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
          <Route path="/grouplist" render={props => <GroupList />} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
