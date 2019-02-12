import React, { Component } from 'react';
import Unicornio from "../../images/unicornio.jpeg";
import './MessageThreading.scss';

class MessageThreading extends Component {
  render() {
    const { messageInfo } = this.props;

    return (
      <section className="messageThreading__container">
        <img
          className="messageThreading__image"
          src={messageInfo.avatar_url}
          alt="User"
        />
        <div className="messageThreading__data">
          <h2 className="messageThreading__name">{messageInfo.name}</h2>
          <p className="messageThreading__message">
            {messageInfo.description}
          </p>
        </div>
      </section>
    );
  }
}

export default MessageThreading;
