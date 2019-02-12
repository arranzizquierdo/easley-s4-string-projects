import React, { Component } from "react";
import "./ButtonStart.scss";
import PropTypes from "prop-types";

class ButtonStart extends Component {
  render() {
    const { handleButton } = this.props;
    return <button
    className="button__styles"
    onClick={handleButton}
    >Inicia sesión</button>;
  }
}

ButtonStart.propTypes = {
  handleButton: PropTypes.func.isRequired,
}

export default ButtonStart;
