import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './LandingPage.scss';
import Header from '../Header';
import LogIn from '../LogIn';

class LandingPage extends Component {
  render() {
    const { saveData, handleButton } = this.props;

    return (
      <Fragment>
        <Header
          showNav={false}
        />
        <LogIn
          saveData={saveData}
          handleButton={handleButton} />
      </Fragment>
    )
  }
}

export default LandingPage;
