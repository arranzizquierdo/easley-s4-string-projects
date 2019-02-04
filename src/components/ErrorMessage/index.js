import React, { Component } from "react";
import "./ErrorMessage.scss";

class ErrorMessage extends Component {
  render() {
    const {wrongCredentials} = this.props;
    const hidden = wrongCredentials === 401 ? "" : "hidden"
    return <p className={`error__text ${hidden}`}>Usuario/a y/o contraseña incorrecto/a</p>;
  }
}

export default ErrorMessage;
