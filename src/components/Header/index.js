import React, { Component } from 'react';
import Logo from '../../images/We..png';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Header extends Component {

    render() {
        const { showNav, children } = this.props;
        return (
            <header className="header">
                <div className="header__container-logo">
                    <img className="logo" src={Logo} alt="Logo We." />
                </div>
                {children}
                {showNav && (
                    <FontAwesomeIcon 
                        icon="ellipsis-h" 
                        className="icon__nav"
                    />
                )}
            </header>
        );
    }
}

Header.defaultProps = {
    showNav: true,
}

export default Header;