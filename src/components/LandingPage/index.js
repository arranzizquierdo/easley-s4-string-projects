import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./LandingPage.scss";
import Header from "../Header";
import LogIn from "../LogIn";

class LandingPage extends Component {
  render() {
    const { saveData, handleButton, wrongCredentials, handleChecked, userInfo, isChecked } = this.props;
    return (
      <Fragment>
        <Header showNav={false} />
        <LogIn
          saveData={saveData}
          handleButton={handleButton}
          wrongCredentials={wrongCredentials}
          handleChecked={handleChecked}
          userInfo={userInfo}
          isChecked={isChecked}
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
