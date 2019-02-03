import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ConversationPage.scss';
import IndividualMessage from '../IndividualMessage';

class ConversationPage extends Component {
    render() { 
        return  (
            <IndividualMessage /> 
        ) 
    }
}
 
export default ConversationPage;
