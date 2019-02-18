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
import { sendMessageFetch } from './components/services/SendMessage';
import ErrorPage from './components/ErrorPage';
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
      error: 0,
      isChecked: false,
      isLoading: true,
      isAuthenticated: false,
      currentGroup: "",
      textInput: "",
      threadId: ""
    };
    this.addModalClick = this.addModalClick.bind(this);
    this.cancelClickModal = this.cancelClickModal.bind(this);
    this.saveData = this.saveData.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.getDataInfo = this.getDataInfo.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.errorCatch = this.errorCatch.bind(this);
    this.inputSendMessage = this.inputSendMessage.bind(this);
    this.inputGetMessage = this.inputGetMessage.bind(this);
    this.getThreadId = this.getThreadId.bind(this);
    this.deleteThreadId = this.deleteThreadId.bind(this);
  }

  componentDidMount() {
    const tokenLs = JSON.parse(localStorage.getItem('token'));

    if (tokenLs) {
      sendTokenFetch(tokenLs)
        .then(() => {
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
              .catch(error => this.errorCatch(error))
          )
        })
        .catch(error => this.errorCatch(error))

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

  inputGetMessage(event) {
    const description = event.target.value;
    this.setState({
      textInput: description
    })
  }

  inputSendMessage(event) {
    event.preventDefault();
    const { token, textInput, threadId } = this.state;
    sendMessageFetch(token, textInput, threadId)
      .then(() => {
        return (
          this.setState({
            textInput: ""
          })
        )
      })
      .catch(error => this.errorCatch(error))

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
            error: error.status
          })
        )
      })
  }

  errorCatch(error) {
    if (error.status === 401) {
      return (
        localStorage.removeItem('token'),
        this.setState({
          isAuthenticated: false,
          isLoading: false
        })
      )
    } else {
      return (
        localStorage.removeItem('token'),
        this.setState({
          error: error.status,
          isAuthenticated: false,
          isLoading: false
        })
      )
    }
  }

  keepInLocalStorage() {
    this.state.isChecked === false
      ? localStorage.removeItem('token')
      : localStorage.setItem('token', JSON.stringify(this.state.token))
  }

  handleButton(event) {
    event.preventDefault();
    this.setState({
      error: 0
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

  getThreadId(threadId) {
    this.setState({
      threadId: threadId
    })
  }

  deleteThreadId() {
    this.setState({
      threadId: ""
    })
  }

  render() {
    const {
      error,
      isHidden,
      token,
      isAuthenticated,
      isLoading,
      dataUser,
      groups,
      currentGroup,
      textInput
    } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/login"
          render={() => {
            return <LandingPage
              saveData={this.saveData}
              handleButton={this.handleButton}
              wrongCredentials={error}
              handleChecked={this.handleChecked}
              token={token}
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
            />
          }
          } />
        <Route
          exact
          path="/"
          render={() => {
            if (error !== 0) {
              return <ErrorPage />
            } else if (isLoading === true) {
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

            }
          }} />
        <Route
          exact
          path="/"
          render={() => {
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
            if (error !== 0) {
              return <ErrorPage />
            } else if (isLoading === true) {
              return <Loading />
            } else if (isLoading === false && isAuthenticated === true) {
              return <ConversationPage
                inputSendMessage={this.inputSendMessage}
                addModalClick={this.addModalClick}
                cancelClickModal={this.cancelClickModal}
                isHidden={isHidden}
                handleLogOut={this.handleLogOut}
                currentGroup={currentGroup}
                inputGetMessage={this.inputGetMessage}
                textInput={textInput}

              />
            } else if (isLoading === false && isAuthenticated === false) {
              return <Redirect to="/login" />
            }
          }} />
        <Route
          path="/conversation-page/:id"
          render={props => {
            if (error !== 0) {
              return <ErrorPage />
            } else if (isLoading === true) {
              return <Loading />
            } else if (isLoading === false && isAuthenticated === true) {
              return <ConversationThreading
                inputSendMessage={this.inputSendMessage}
                addModalClick={this.addModalClick}
                cancelClickModal={this.cancelClickModal}
                isHidden={isHidden}
                handleLogOut={this.handleLogOut}
                inputGetMessage={this.inputGetMessage}
                textInput={textInput}
                getThreadId={this.getThreadId}
                deleteThreadId={this.deleteThreadId}
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
