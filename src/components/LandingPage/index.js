import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './LandingPage.scss';
import LogIn from '../LogIn';

class LandingPage extends Component {
    render() {
      const {saveData, handleButton} = this.props;
        return <LogIn saveData = {saveData} handleButton = {handleButton}/>
    }
}

export default LandingPage;
