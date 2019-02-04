import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './ConversationPage.scss';
import Header from '../Header';
import groupImage from '../../images/groupImage.jpg';
import IndividualMessage from '../IndividualMessage';
import Modal from "../Modal";
import GoBack from "../GoBack";
import { Link } from 'react-router-dom';

class ConversationPage extends Component {
    render() {
        return (
            <Fragment>
                <Header>
                    <div className="header__group__container">
                        <img className="header__group__image" src={groupImage} alt="Icono grupo" />
                        <span className="header__container__text">
                            <h2 className="header__group__title">Recetas y menús</h2>
                            <p className="header__group__persons">56 personas</p>
                        </span>
                    </div>
                </Header>
                <main>
                <Link className = "style_link" to="/mainpage">
                <GoBack />
                </Link>
                <IndividualMessage />
                <Modal />
                </main>
            </Fragment>
        )
    }
}

export default ConversationPage;
