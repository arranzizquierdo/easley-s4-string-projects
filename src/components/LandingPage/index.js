import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./LandingPage.scss";
import Header from "../Header";
import LogIn from "../LogIn";

class LandingPage extends Component {
  render() {
    const { saveData, handleButton, wrongCredentials } = this.props;

    return (
      <Fragment>
        <Header showNav={false} />
        <LogIn
          saveData={saveData}
          handleButton={handleButton}
          wrongCredentials={wrongCredentials}
        />
      </Fragment>
    );
  }
}

export default LandingPage;

LandingPage.propTypes = {
  saveData: PropTypes.func.isRequired,
  handleButton: PropTypes.func.isRequired,
  wrongCredentials: PropTypes.number
};
