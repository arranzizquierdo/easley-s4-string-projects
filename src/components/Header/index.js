import React, { Component } from 'react';
import Logo from '../../images/We..png';
import './Header.scss';

class Header extends Component {

    render() { 
        return ( 
            <header className="header">
                <div className="header__container-logo">
                    <img className="logo" src={Logo} alt="Logo We."/>
                </div>
                {this.props.children}
            </header>
         );
    }
}
 
export default Header;