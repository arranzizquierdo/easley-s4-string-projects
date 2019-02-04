import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './ConversationThreading.scss';
import Header from '../Header';
import IndividualMessage from '../IndividualMessage/index'
import SendMessage from '../SendMessage';
import MessageThreading from '../MessageThreading';

class ConversationThreading extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          <span className="header__container__thread">
            <h2 className="header__group__title-thread">Hilo</h2>
            <h3 className="header__group__persons-thread">Recetas y menús</h3>
          </span>
        </Header>
        <main className="main__conversationThreading">
          <IndividualMessage />
          <div className="answers">Respuestas</div>
          <MessageThreading />
          <section className="container__message">
          <SendMessage />
          </section>

        </main>
      </Fragment>
    )
  }
}

export default ConversationThreading;
