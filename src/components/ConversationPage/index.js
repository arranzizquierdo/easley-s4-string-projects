import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ConversationPage.scss';
import Header from '../Header';
import groupImage from '../../images/groupImage.jpg';

class ConversationPage extends Component {
    render() { 
        return  (
            <Header>
                <div className = "header__group__container">
                    <img className = "header__group__image" src={groupImage} alt="Icono grupo"/>
                    <span className = "header__container__text">
                    <p className = "header__group__title">Recetas y menús</p>
                    <p className = "header__group__persons">56 personas</p>
                    </span>
                </div>
            </Header>
        ) 
    }
}
 
export default ConversationPage;
