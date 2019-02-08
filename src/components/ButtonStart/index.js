import React, { Component } from "react";
import "./ButtonStart.scss";

class ButtonStart extends Component {
  render() {
    const { handleButton } = this.props;
    return <div className="button__styles" onClick={handleButton}>Inicia sesión</div>;
  }
}

export default ButtonStart;
