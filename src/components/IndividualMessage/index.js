import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./IndividualMessage.scss";

class IndividualMessage extends Component {
  render() {
    const { messageInfo } = this.props;
    console.log('message data =>',messageInfo)
    return (
        <section className="individualMessage__container">
        <img className="individualMessage__image" src={messageInfo.avatar_url} alt={messageInfo.username} />
        <div className="individualMessage__data">
          <h2 className="individualMessage__name">{messageInfo.username}</h2>
          <p className="individualMessage__message">
            {messageInfo.description}
          </p>
          <small className="individualMessage__date">{messageInfo.date}</small>
        </div>
      </section>

    );
  }
}

IndividualMessage.propTypes = {
  messageInfo: PropTypes.object.isRequired,
}

export default IndividualMessage;
