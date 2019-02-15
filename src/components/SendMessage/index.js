import React, { Component } from "react";
import "./SendMessage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SendMessage extends Component {
  render() {
    const { inputSendMessage, inputGetMessage, textInput } = this.props;
    return (
      <form className="sendmessage__container">
        <label htmlFor="input" />
        <input
          id="input"
          className="sendmessage__input"
          onChange={inputGetMessage}
          value={textInput}
        />
        <button
        className="sendmessage__button"
        onClick={inputSendMessage}>
          <FontAwesomeIcon
          icon="paper-plane" className="paperplane__styles" />
        </button>
      </form>
    );
  }
}

export default SendMessage;
