import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './LandingPage.scss';
import Header from '../Header';
import LogIn from '../LogIn';

class LandingPage extends Component {
    render() {
        return (
            <Fragment>
                <Header
                    showNav={false}
                />
                <LogIn />
            </Fragment>
        )
    }
}

export default LandingPage;
