import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ConversationPage.scss";
import Modal from "../Modal";
import IndividualMessage from "../IndividualMessage";

class ConversationPage extends Component {
  render() {
    return (
      <React.Fragment>
        <IndividualMessage />
        <Modal />
      </React.Fragment>
    );
  }
}

export default ConversationPage;
