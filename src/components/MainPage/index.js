import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import './MainPage.scss';


class MainPage extends Component {
    render() { 
        return (
            <Header>
                <h2 className="header__tittle">Grupos</h2>
            </Header>
  
        )
    }
}
 
export default MainPage;