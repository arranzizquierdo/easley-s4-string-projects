import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './ConversationPage.scss';
import Header from '../Header';
import groupImage from '../../images/groupImage.jpg';
import IndividualMessage from '../IndividualMessage';

class ConversationPage extends Component {
    render() {
        return (
            <Fragment>
                <Header>
                    <div className="header__group__container">
                        <img className="header__group__image" src={groupImage} alt="Icono grupo" />
                        <span className="header__container__text">
                            <p className="header__group__title">Recetas y menús</p>
                            <p className="header__group__persons">56 personas</p>
                        </span>
                    </div>
                </Header>
                <IndividualMessage />
            </Fragment>
        )
    }
}

export default ConversationPage;
