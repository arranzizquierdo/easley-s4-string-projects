import React, { Component } from 'react';
import Unicornio from "../../images/unicornio.jpeg";
import './MessageThreading.scss';

class MessageThreading extends Component {

  render() {
    return (
      <section className="messageThreading__container">
        <img
          className="messageThreading__image"
          src={Unicornio}
          alt="Profile Image"
        />
        <div className="messageThreading__data">
          <h2 className="messageThreading__name">Pantera Rosa</h2>
          <p className="messageThreading__message">
            Yo tengo una receta muy sencilla.
          </p>
        </div>
      </section>
     );
  }
}

export default MessageThreading;
