import React, { Component } from 'react';
import './stylesheets/App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import ConversationPage from './components/ConversationPage';
import ConversationThreading from './components/ConversationThreading';
import Loading from './components/Loading';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fetchToken } from './components/services/TokenService';
import { sendTokenFetch } from './components/services/SendToken';
import { tokenDataFetch } from './components/services/TokenData';
import {
  faEllipsisH,
  faEyeSlash,
  faPaperPlane,
  faKey,
  faAngleDoubleLeft,
  faEye
} from '@fortawesome/free-solid-svg-icons';
library.add(faEllipsisH, faEyeSlash, faPaperPlane, faKey, faAngleDoubleLeft, faEye);

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
      token: "",
      logIn: {
        error: 0
      },
      isChecked: false,
      isLoading: true,
      isAuthenticated: false,
      currentGroup:""
    };
    this.addModalClick = this.addModalClick.bind(this);
    this.cancelClickModal = this.cancelClickModal.bind(this);
    this.saveData = this.saveData.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.getDataInfo = this.getDataInfo.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    const tokenLs = JSON.parse(localStorage.getItem('token'));

    if (tokenLs) {
      return (sendTokenFetch(tokenLs))
        .then(data => {
          if (data === true) {
            return (
              this.setState({
                isAuthenticated: true
              }),
              tokenDataFetch(tokenLs)
                .then(data => {
                  return (
                    this.setState({
                      dataUser: data.user,
                      groups: data.groups,
                      token: data.user.auth_token,
                      isLoading: false,
                      currentGroup: data.current_group
                    })
                  )
                })
            )
          } else {
            return (
              this.setState({
                isAuthenticated: false,
                isLoading: false
              })
            )
          }
        });
    } else {
      return (
        this.setState({
          isLoading: false,
          isAuthenticated: false
        })
      )
    }
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

  getDataInfo() {
    fetchToken(this.state.userInfo)
      .then(data => {
        return (
          this.setState({
            dataUser: data.user,
            groups: data.groups,
            token: data.user.auth_token,
            userInfo: {
              nickname: "",
              password: ""
            },
            isAuthenticated: true,
            currentGroup: data.current_group
          }),
          this.keepInLocalStorage()
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

  keepInLocalStorage() {
    if (this.state.isChecked === false) {
      return (localStorage.removeItem('token'))
    } else {
      localStorage.setItem('token', JSON.stringify(this.state.token))
    }
  }

  handleButton(event) {
    event.preventDefault();
    this.setState({
      logIn: {
        errorLogIn: 0
      }
    })
    this.getDataInfo();
  }

  handleChecked(event) {
    if (this.state.isChecked === false) {
      this.setState({
        isChecked: true
      })
    } else {
      this.setState({
        isChecked: false
      })
    }
  }

  handleLogOut() {
    this.setState({
      isAuthenticated: false,
      token: "",
      isHidden: true
    })
    localStorage.removeItem('token')
  }

  render() {
    const { logIn, isHidden, token, isAuthenticated, isLoading, dataUser, groups, currentGroup } = this.state;
    return (
      <Switch>

        <Route exact path="/login" render={() =>
          (<LandingPage
            saveData={this.saveData}
            handleButton={this.handleButton}
            wrongCredentials={logIn.error}
            handleChecked={this.handleChecked}
            token={token}
            isAuthenticated={isAuthenticated}
            isLoading={isLoading}
          />)} />
        <Route exact path="/" render={() => {
          if (isLoading === true) {
            return <Loading />
          } else if (isLoading === false && isAuthenticated === true) {
            return <MainPage
              addModalClick={this.addModalClick}
              cancelClickModal={this.cancelClickModal}
              isHidden={isHidden}
              handleLogOut={this.handleLogOut}
              dataUser={dataUser}
              groups={groups}
            />
          } else if (isLoading === false && isAuthenticated === false) {
            return <Redirect to="/login" />
          }
        }} />

        <Route
          exact
          path="/conversation-page"
          render={() => {
            if (isLoading === true) {
              return <Loading />
            } else if (isLoading === false && isAuthenticated === true) {
              return <ConversationPage
                inputSendMessage={this.inputSendMessage}
                addModalClick={this.addModalClick}
                cancelClickModal={this.cancelClickModal}
                isHidden={isHidden}
                handleLogOut={this.handleLogOut}
                token={this.state.token}
                isLoading={isLoading}
                dataUser={dataUser}
                groups={groups}
                currentGroup={currentGroup}

              />
            } else if (isLoading === false && isAuthenticated === false) {
              return <Redirect to="/login" />
            }
          }} />
        <Route
          path="/conversation-page/:id"
          render={props => {
            if (isLoading === true) {
              return <Loading />
            } else if (isLoading === false && isAuthenticated === true) {
              return <ConversationThreading
                inputSendMessage={this.inputSendMessage}
                addModalClick={this.addModalClick}
                cancelClickModal={this.cancelClickModal}
                isHidden={isHidden}
                handleLogOut={this.handleLogOut}
                isLoading={isLoading}
                dataUser={dataUser}
                token={this.state.token}
                match={props.match}
              />
            } else if (isLoading === false && isAuthenticated === false) {
              return <Redirect to="/login" />
            }
          }}
        />
      </Switch >
    )
  }
}

export default App;
