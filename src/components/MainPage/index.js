import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainPage.scss';
import Modal from '../Modal';
import image from '../../images/temporal_5.jpg';

class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="image" src={image}
                alt="Tom Hanks"
                />
                <Modal />
            </React.Fragment>
        )
    }
}

export default MainPage;