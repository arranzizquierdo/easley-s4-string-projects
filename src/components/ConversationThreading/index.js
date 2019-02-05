import React, { Component } from 'react';
import './ConversationThreading.scss';
import Header from '../Header';
import IndividualMessage from '../IndividualMessage/index'
import SendMessage from '../SendMessage';
import MessageThreading from '../MessageThreading';
import GoBack from "../GoBack";
import { Link } from 'react-router-dom';

class ConversationThreading extends Component {
  render() {
    const { addModalClick } = this.props;
    return (
      <React.Fragment>
        <Header
          addModalClick={addModalClick}
          showNav={false}>
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
          <IndividualMessage />
          <div className="answers">Respuestas</div>
          <MessageThreading />
          <section className="container__message">
            <SendMessage />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default ConversationThreading;
