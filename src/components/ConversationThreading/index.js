import React, { Component } from 'react';
import './ConversationThreading.scss';
import Header from '../Header';
import IndividualMessage from '../IndividualMessage/index'
import SendMessage from '../SendMessage';
import MessageThreading from '../MessageThreading';
import Modal from "../Modal";
import GoBack from "../GoBack";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { tokenThreadFetch } from '../services/TokenThread';
import Loading from '../Loading';


class ConversationThreading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoThread: null
    }
  }

  componentDidMount() {
    this.bringMessagesThread();
    this.interval = setInterval(() => this.bringMessagesThread(), 2000);
  }

  componentWillUnmount() {

    clearInterval(this.interval);
    const { deleteThreadId } = this.props;
    deleteThreadId();
  }

  bringMessagesThread() {
    const {
      token,
      errorCatch,
      getThreadId
    } = this.props;
    const idMessage = this.props.match.params.id;
    getThreadId(idMessage);
    tokenThreadFetch(token, idMessage)
      .then(data => {
        if(this && this.setState) {
          return (
            this.setState({
              infoThread: data
            })
          )
        }
      })
      .catch(error => errorCatch(error))
  }

  render() {
    const {
      addModalClick,
      isHidden,
      cancelClickModal,
      handleLogOut,
      inputGetMessage,
      inputSendMessage,
      textInput
    } = this.props;
    const { infoThread } = this.state;

    if (!infoThread) {
      return (<Loading />)
    } else {
      const answersMessage = infoThread.length - 1;

      return (
        <React.Fragment>
          <Header addModalClick={addModalClick}>
            <div className="header__group__container">
              <span className="header__container__thread">
                <h2 className="header__group__title-thread">Hilo</h2>
                <h3 className="header__group__persons-thread">Adalab Easley Group</h3>
              </span>
            </div>
          </Header>
          <main className="main__conversationThreading">
            <Link
              className="style_link"
              to="/conversation-page"
            >
              <GoBack />
            </Link>
            <IndividualMessage messageInfo={infoThread[0]}
            />
            <main className="container_main">
              <div className="answers">{answersMessage} Respuestas</div>
              <ul>
                {infoThread
                  .filter(message => message.post_id !== null)
                  .map(message => {
                    return (
                      <li key={message.id}>
                        <MessageThreading
                          messageInfo={message}
                        />
                      </li>
                    )
                  })}
              </ul>
            </main>
            <section className="container__message">
              <SendMessage
                inputGetMessage={inputGetMessage}
                inputSendMessage={inputSendMessage}
                textInput={textInput} />
            </section>
            <Modal
              isHidden={isHidden}
              cancelClickModal={cancelClickModal}
              handleLogOut={handleLogOut} />
          </main>
        </React.Fragment>
      )
    }
  }
}

ConversationThreading.propTypes = {
  deleteThreadId: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  errorCatch: PropTypes.func.isRequired,
  getThreadId: PropTypes.func.isRequired,
}

export default ConversationThreading;
