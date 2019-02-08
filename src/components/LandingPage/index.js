import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./LandingPage.scss";
import Header from "../Header";
import LogIn from "../LogIn";

class LandingPage extends Component {
  render() {
    const { saveData, handleButton, wrongCredentials, handleChecked, token, isAuthenticated, isLoading } = this.props;

    return (
      <Fragment>
        <Header showNav={false} />
        <LogIn
          saveData={saveData}
          handleButton={handleButton}
          wrongCredentials={wrongCredentials}
          handleChecked={handleChecked}
          token={token}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
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
}
