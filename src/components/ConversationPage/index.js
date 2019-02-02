import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ConversationPage.scss';
import Header from '../Header';
import groupImage from '../../images/groupImage.jpg';

class ConversationPage extends Component {
    render() { 
        return  (
            <Header>
                <div className = "group__container">
                    <img className = "group__image" src={groupImage} alt="Icono grupo"/>
                    <span className = "container__text">
                    <p className = "group__title">Recetas y menús</p>
                    <p className = "group__persons">56 personas</p>
                    </span>
                </div>
            </Header>
        ) 
    }
}
 
export default ConversationPage;
