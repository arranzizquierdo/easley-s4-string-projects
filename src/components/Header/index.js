import React, { Component } from 'react';
import Logo from '../../images/We..png';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Header extends Component {

  render() {
    const {
      showNav,
      children,
      addModalClick
    } = this.props;
    return (
      <header className="header">
        <Link
          className="header__container-logo"
          to="/">
          <img
          className="logo"
          src={Logo}
          alt="We." />
        </Link>
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
  showNav: PropTypes.bool.isRequired,
  addModalClick: PropTypes.func,
}

export default Header;
