import React, { Component } from 'react';
import Logo from '../../images/We..png';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";


class Header extends Component {

  render() {
    const { showNav, children, addModalClick } = this.props;
    return (
      <header className="header">
        <div className="header__container-logo">
          <img className="logo" src={Logo} alt="We." />
        </div>
        {children}
        {showNav && (
          <FontAwesomeIcon
            icon="ellipsis-h"
            className="icon__nav"
            onClick={addModalClick}
          />
        )}
      </header>
    );
  }
}

Header.defaultProps = {
  showNav: true,
}

Header.propTypes = {
  children: PropTypes.object,
  showNav: PropTypes.bool.isRequired
}

export default Header;
