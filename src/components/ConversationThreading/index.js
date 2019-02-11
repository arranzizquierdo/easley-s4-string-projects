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

class ConversationThreading extends Component {
  render() {
    const { addModalClick, isHidden, cancelClickModal, handleLogOut, isLoading, dataUser } = this.props;
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
          <IndividualMessage isLoading={isLoading} dataUser={dataUser}/>
          <div className="answers">Respuestas</div>
          <MessageThreading />
          <section className="container__message">
            <SendMessage />
          </section>
          <Modal isHidden={isHidden} cancelClickModal={cancelClickModal} handleLogOut={handleLogOut} />
        </main>
      </React.Fragment>
    )
  }
}

ConversationThreading.propTypes = {
  addModalClick: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
  cancelClickModal: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired
}

export default ConversationThreading;
