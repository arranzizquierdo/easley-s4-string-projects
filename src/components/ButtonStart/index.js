import React, { Component } from "react";
import "./ButtonStart.scss";

class ButtonStart extends Component {
  render() {
    const { handleButton } = this.props;
    return <button className="button__styles" onClick={handleButton}>Inicia sesión</button>;
  }
}

export default ButtonStart;
