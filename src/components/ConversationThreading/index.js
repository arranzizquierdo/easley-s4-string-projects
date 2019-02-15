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
import {sendGeneralMessageFetch} from '../services/SendMessage'

class ConversationThreading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoThread: null
    }
  }

  componentDidMount() {
    const { token, errorCatch, getThreadId } = this.props;
    const idMessage = this.props.match.params.id;
    getThreadId(idMessage);
    tokenThreadFetch(token, idMessage)
      .then(data => {
        return (
          this.setState({
            infoThread: data
          })
        )
      })
      .catch(error => errorCatch(error));
  }

  componentWillUnmount(){
    const { deleteThreadId }= this.props;
    deleteThreadId();
  }

  render() {
    const { addModalClick, isHidden, cancelClickModal, handleLogOut, inputGetMessage, inputSendGeneralMessage } = this.props;
    const { infoThread } = this.state;

    if(!infoThread){
      return (<Loading />)
    } else {
      return (
        <React.Fragment>
          <Header addModalClick={addModalClick}>
            <div className="header__group__container">
              <span className="header__container__thread">
                <h2 className="header__group__title-thread">Hilo</h2>
                <h3 className="header__group__persons-thread">Recetas y menús</h3>
              </span>
            </div>
          </Header>
          <main className="main__conversationThreading">
            <Link className="style_link" to="/conversation-page">
              <GoBack />
            </Link>
            <IndividualMessage
              messageInfo={infoThread[0]}
            />
            <div className="answers">Respuestas</div>
            <ul>
              {infoThread
              .filter(message=> message.post_id !== null)
              .map(message =>{
                return(
                  <li key={message.id}>
                    <MessageThreading
                    messageInfo = {message}
                    />
                  </li>
                )
              })}
            </ul>
            <section className="container__message">
              <SendMessage
              inputGetMessage={inputGetMessage}
              inputSendGeneralMessage={inputSendGeneralMessage} />
            </section>
            <Modal
              isHidden={isHidden}
              cancelClickModal={cancelClickModal} handleLogOut={handleLogOut} />
          </main>
        </React.Fragment>
      )
    }
  }
}

ConversationThreading.propTypes = {
  addModalClick: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
  cancelClickModal: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
  dataUser: PropTypes.object.isRequired
}

export default ConversationThreading;
