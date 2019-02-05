import React, { Component } from "react";
import "./ErrorMessage.scss";
import PropTypes from "prop-types";

class ErrorMessage extends Component {
  render() {
    const { wrongCredentials } = this.props;
    const hidden = wrongCredentials === 401 ? "" : "hidden"
    return <p className={`error__text ${hidden}`}>Usuario/a y/o contraseña incorrecto/a</p>;
  }
}

export default ErrorMessage;

ErrorMessage.propTypes = {
  wrongCredentials: PropTypes.number
}
